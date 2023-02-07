window.affiliateryConfig = {
  apiUrl: "https://affiliatery-app-api.staqlab.com/affiliatery",
  clientId: "MF6Y4YN86NT7ZCFRPNU3ETAR",
  autoApplyDiscount: false,
  checkDiscountCookie:false
};

(async function () {
  function isPostPurchasePage() {
    return Shopify && (Shopify.Checkout) && (Shopify.Checkout.page === "thank_you" || Shopify.Checkout.isOrderStatusPage)
  }

  async function getDiscountCode(refCode) {
    try {
      return (await (await fetch(`${affiliateryConfig.apiUrl}/api/discount-code?clientId=${affiliateryConfig.clientId}&refCode=${refCode}`)).json()).discountCode
    } catch (e) {
      console.log(e)
    }
  }

  async function processEvent() {
    try {
      let partnerRefCode = await getPartnerCode()
      if (!partnerRefCode) {
        return
      }
      let key = `affiliatery-user-id`
      let userUniqueId = await getcookie(key)

      let data = {
        userUniqueId: userUniqueId,
        refCode: partnerRefCode,
        clientUniqueId: window.affiliateryConfig.clientId
      }
      userUniqueId = (await (await fetch(`${affiliateryConfig.apiUrl}/api/aevt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(data)
      })).json()).userUniqueId
      document.cookie = `${key}=${userUniqueId};max-age=31104000;path=/`;
    } catch (e) {
      console.log(e)
    }
  }

  function getPartnerCode() {
    let partnerRefCode = getcookie(`affiliatery-partner-code`)
    if (partnerRefCode) {
      let refValidTill = getcookie('affiliatery-ref-age')
      if (refValidTill && Number(refValidTill)) {
        setRefCode(partnerRefCode, refValidTill)
      }
    }

    if (!partnerRefCode) {
      try {
        let value = window.localStorage.getItem(`affiliatery-partner-code`);
        if (value && value !== 'null' && value !== 'undefined') {
          let age = value.split(";").find(x => x.includes("created-at"))
          if (age) {
            age = Number(age.split("created-at=")[1].trim())
            let maxAge = Number(value.split(";").find(x => x.includes("max-age")).split("max-age=")[1].trim())
            if ((age + maxAge * 1000) > new Date().valueOf())
              partnerRefCode = value.split("=")[1].split(";")[0];
          }
        } else {
          let shopifyRefCode = getcookie(`_shopify_sa_p`)
          if (shopifyRefCode) {
            shopifyRefCode = decodeURIComponent(shopifyRefCode)
            shopifyRefCode = shopifyRefCode.replace("ref=", "")
            partnerRefCode = shopifyRefCode
          }
        }

      } catch (e) {
        console.log(e)
      }
    }
    return partnerRefCode
  }

  function getcookie(name = '') {
    let cookies = document.cookie;
    let cookiestore = {};

    cookies = cookies.split(";");

    if (cookies[0] === "" && cookies[0][0] === undefined) {
      return undefined;
    }

    cookies.forEach(function (cookie) {
      cookie = cookie.split(/=(.+)/);
      if (cookie[0].substr(0, 1) === ' ') {
        cookie[0] = cookie[0].substr(1);
      }
      cookiestore[cookie[0]] = cookie[1];
    });

    return (name !== '' ? cookiestore[name] : cookiestore);
  }

  function processDiscount(code) {
    let params = Object.fromEntries(new URLSearchParams(location.search))
    if (params.ref_cca) {
      return
    }
    if(!params.ref){
      if(!affiliateryConfig.checkDiscountCookie){
        return;
      }
      let isDiscountCodeTriedKey = 'affiliatery_dis_tried'
      if (getcookie(isDiscountCodeTriedKey)) {
        return;
      }
      document.cookie = `${isDiscountCodeTriedKey}=true;max-age=31104000;path=/`;
      if (getcookie('discount_code') === code) {
        return;
      }
    }
    if(params.ref)
    params.ref_cca = params.ref;
    delete params.ref;
    try {
      let query = new URLSearchParams(params).toString();
      let url = `https://${window.location.hostname}/discount/${code}?redirect=${location.pathname}${query ? `?${query}` : ''}`;
      url = encodeURI(url);
      window.location.href = url
    } catch (e) {
      console.error("Error", e);
    }
  }

  function setRefCode(partnerRefCode, refValidTill) {
    let refCodeMaxAge = refValidTill - parseInt(new Date().valueOf() / 1000);
    if (refCodeMaxAge < 0) {
      console.log(`refCodeMaxAge ${refCodeMaxAge} not valid`);
      return;
    }
    let refCookie = `affiliatery-partner-code=${partnerRefCode};max-age=${refCodeMaxAge};path=/`;
    document.cookie = refCookie

    let refValidTillCookie = `affiliatery-ref-age=${refValidTill};max-age=${refCodeMaxAge};path=/`;
    document.cookie = refValidTillCookie
  }

  function queryStringToJSON(qs) {
    qs = qs || location.search.slice(1);

    let pairs = qs.split('&');
    let result = {};
    pairs.forEach(function (p) {
      let pair = p.split('=');
      let key = pair[0];
      let value = decodeURIComponent(pair[1] || '');

      if (result[key]) {
        if (Object.prototype.toString.call(result[key]) === '[object Array]') {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    });

    return JSON.parse(JSON.stringify(result));
  }

  let queryJson = queryStringToJSON(location.search.slice(1))
  let partnerRefCode = queryJson.ref || queryJson.ref_cca;
  if (partnerRefCode) {
    partnerRefCode = decodeURIComponent(partnerRefCode)
    let refCodeMaxAge = parseInt('2592000')
    let refValidTill = parseInt(new Date().valueOf() / 1000) + refCodeMaxAge
    setRefCode(partnerRefCode, refValidTill)
    try {
      let refInfo = `affiliatery-partner-code=${partnerRefCode};max-age=2592000;path=/`;
      window.localStorage.setItem(`affiliatery-partner-code`, refInfo + `;created-at=${new Date().valueOf()}`);
    } catch (e) {
      console.log(e)
    }

  } else {
    partnerRefCode = getPartnerCode(`affiliatery-partner-code`)
    let discountCodeCookie = getcookie('discount_code')
  }
  if (partnerRefCode) {
    if (affiliateryConfig.autoApplyDiscount) {
      let code = await getDiscountCode(partnerRefCode);
      if (code) {
        processDiscount(code)
      }
    }
  }


  console.log(partnerRefCode)

  async function cartMapping() {

    let cartResponse = await fetch(`https://${window.location.host}/cart.js`)
      .then(x => x.json())
      .catch(x => console.log(x.status));
    let key = `affiliatery-user-id`
    let userUniqueId = await getcookie(key)
    let mapping = {
      cartToken: (cartResponse && cartResponse.token) || 'NA',
      partnerRefCode: partnerRefCode,
      clientUniqueId: window.affiliateryConfig.clientId,
      userUniqueId: userUniqueId
    };
    const url = "https://affiliatery-app-api.staqlab.com/affiliatery/api/cart-mapping";
    if (cartResponse && cartResponse.token) {
      mapping['cartToken'] = cartResponse.token;
    }

    //if (window.location.href.includes("checkouts")) {
    mapping['checkoutToken'] = Shopify && Shopify.Checkout && Shopify.Checkout.token
    // }
    if (isPostPurchasePage()) {
      mapping["orderStatusUrl"] = window.location.href
    }

    mapping["orderId"] = Shopify.checkout && Shopify.checkout.order_id

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(mapping)
    });
  }

  async function processCart() {
    try {
      if (partnerRefCode) {
        if (["utm_source", "gclid", "fbclid"].some(x => partnerRefCode.includes(x))) {
          if (!partnerRefCode.includes("ref")) {
            return
          }
        }
        fetch(`/cart/update.js`, {
          method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({attributes: {"__aff_ref": partnerRefCode}})
        });
      }
    } catch (e) {
      console.log(e)
    }

  }

  processCart()
  // if (partnerRefCode)
  await cartMapping()

  await processEvent()

})();
