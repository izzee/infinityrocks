"use client"
import Calendar2025 from '@/components/projects/Calendar2025.js'
import Script from 'next/script';
import styles from '@/styles/components/Section.module.scss'

const Calendar2025Homepage = () => {

  const ShopifyBuyInit = () => {
    var client = ShopifyBuy.buildClient({
      domain: 'shop.infinity8rocks.com',
      storefrontAccessToken: 'e33b2c6bbfafc0abb382f4646dc35585',
    });

    const options =  {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "title": {
            "font-size": "16px",
            "color": "#000000"
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            "color": "#000000",
            ":hover": {
              "color": "#000000",
              "background-color": "#38e200"
            },
            "background-color": "#3efb00",
            ":focus": {
              "background-color": "#38e200"
            },
            "border-radius": "0px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          },
          "price": {
            "font-size": "16px",
            "color": "#000000"
          },
          "compareAt": {
            "font-size": "13.6px",
            "color": "#000000"
          },
          "unitPrice": {
            "font-size": "13.6px",
            "color": "#000000"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            "color": "#000000",
            ":hover": {
              "color": "#000000",
              "background-color": "#38e200"
            },
            "background-color": "#3efb00",
            ":focus": {
              "background-color": "#38e200"
            },
            "border-radius": "0px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          },
          "title": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            "color": "#4c4c4c"
          },
          "price": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            "color": "#4c4c4c"
          },
          "compareAt": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "unitPrice": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            "color": "#000000",
            ":hover": {
              "color": "#000000",
              "background-color": "#38e200"
            },
            "background-color": "#3efb00",
            ":focus": {
              "background-color": "#38e200"
            },
            "border-radius": "0px"
          },
          "title": {
            "color": "#000000"
          },
          "header": {
            "color": "#000000"
          },
          "lineItems": {
            "color": "#000000"
          },
          "subtotalText": {
            "color": "#000000"
          },
          "subtotal": {
            "color": "#000000"
          },
          "notice": {
            "color": "#000000"
          },
          "currency": {
            "color": "#000000"
          },
          "close": {
            "color": "#000000",
            ":hover": {
              "color": "#000000"
            }
          },
          "empty": {
            "color": "#000000"
          },
          "noteDescription": {
            "color": "#000000"
          },
          "discountText": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "discountAmount": {
            "color": "#000000"
          },
          "cart": {
            "background-color": "#3efb00"
          },
          "footer": {
            "background-color": "#3efb00"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#3efb00",
            ":hover": {
              "background-color": "#38e200"
            },
            ":focus": {
              "background-color": "#38e200"
            }
          },
          "count": {
            "font-size": "16px",
            "color": "#000000",
            ":hover": {
              "color": "#000000"
            }
          },
          "iconPath": {
            "fill": "#000000"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#000000"
          },
          "title": {
            "color": "#000000"
          },
          "price": {
            "color": "#000000"
          },
          "fullPrice": {
            "color": "#000000"
          },
          "discount": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "quantity": {
            "color": "#000000"
          },
          "quantityIncrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityDecrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityInput": {
            "color": "#000000",
            "border-color": "#000000"
          }
        }
      }
    }

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9651295715614',
        node: document.getElementById('product-component-1733848918337'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options
      });
      ui.createComponent('product', {
        id: '9655041229086',
        node: document.getElementById('product-component-1733865407524'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options
      });
    }); 
  }

  return (
    <>
      <Script
        src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
        strategy="afterInteractive"
        onLoad={ShopifyBuyInit}
        onError={(e) => console.error('Script failed to load', e)}
      />
      <Calendar2025>
        <div className={styles.section}>
          <div className={styles.title}>
            2025
            <a href="/" className={styles.closebutton}>×</a>
          </div>
          <div className={styles.content}>
            <div className={styles.shopify}>
              <div id="product-component-1733848918337"/>
              <div id="product-component-1733865407524"/>
            </div>
          </div>
        </div>
      </Calendar2025>
    </>
  )
}

export default Calendar2025Homepage;

