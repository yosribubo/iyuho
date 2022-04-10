<template>
    <header>
        <section>
            <svg id="back_btn" xmlns="http://www.w3.org/2000/svg" width="15.516" height="15.058" viewBox="0 0 15.516 15.058" v-on:click="goBack">
                <g id="menu-left" transform="translate(-3.211 -5.571)">
                  <g id="__TEMP__SVG__" transform="translate(-3.07 -1.244)">
                    <path id="Path_110" data-name="Path 110" d="M13.5,20.812,7.031,14.344,13.5,7.875" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Path_111" data-name="Path 111" d="M8.438,18H21.555" transform="translate(-0.508 -3.656)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                  </g>
                </g>
              </svg>
            <p><span id="record_title">USDT</span> Record</p>
            <div class="dropdown">
                <svg class="dropdown" id="dropdown-content" xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" v-on:click="dropDownToggle">
                    <g id="menu-right" transform="translate(-3 -7.1)">
                      <rect id="Rectangle_1" data-name="Rectangle 1" width="10" height="2" rx="1" transform="translate(10 7.1)" fill="#fff"/>
                      <rect id="Rectangle_3" data-name="Rectangle 3" width="17" height="2" rx="1" transform="translate(3 12.1)" fill="#fff"/>
                      <rect id="Rectangle_2" data-name="Rectangle 2" width="10" height="2" rx="1" transform="translate(3 17.1)" fill="#fff"/>
                    </g>
                </svg>
                <div class="dropdown-content">
                    <p><span id="usdt_lock" style="opacity:0.2" v-on:click="usdtClick">USDT</span></p>
                    <p><span id="gas_lock" v-on:click="gasClick">Gas</span></p>
                    <p><span id="nft_lock" v-on:click="nftClick">NFT</span></p>
                    <p><span id="token_lock" v-on:click="tokenClick">Token</span></p>
                    <p><span id="pin_lock" v-on:click="pinClick">PIN</span></p>
                </div>
            </div>
        </section>
    </header>
     <main id="lock_list" class="top end-line">
            <section v-for="item of locklist" :key="item.id"  class="list-field">
                <div class="list-field-div">
                    <section class="list-subfield">
                        <span v-html="item.img" />
                        <div>
                            <section>
                                <p>{{item.currency}}</p>
                                <span>{{item.datetime}}</span>
                            </section>
                        </div>
                    </section>
                    <section class="list-subfieldbottom">
                        <div style="padding-top: 3px;">
                            <p>Remark</p>
                            <p>{{item.description}}</p>
                        </div>
                        <div>
                            <p>Amount</p>
                            <span style="color: #49E052" v-if="item.amount>=0">+ {{item.amount}} {{item.currency}}</span>
                            <span v-else>- {{item.amount}} {{item.currency}}</span>
                        </div>
                    </section>
                </div>
            </section>
    </main>
    <div class="list-page lock-list-page" style="margin-top:5%;" v-html="page">            
    </div>
</template>

<script>
    import $ from 'jquery';
    // import axios from 'axios';

    const mylockJsonData = require('./json/mylock.json');
    export default {
        data: function() {
            return {
                locklist: [],
                page: '',
                types: 0,
                usdt_img: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 28 28"><defs><pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 346 346"><image width="346" height="346" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVoAAAFaCAYAAABfUZV2AAAABHNCSVQICAgIfAhkiAAAHdVJREFUeF7tnb2SHMeRgJevIFMuDK1cBC8CwQcADTgXhL0vAEP0SZkUfcnQC6x7x4BzBvEADEYIdy7AiDsXJl4BNz3YXvb0dHf9ZVZlVn1w7ih0VVd9mf0hN7tm9otPnz7d8AcCrQn85//9z5caa3j55OlbjXmZEwIpBL5AtCm4uDaVwFqg9+9/vZvmePfxw+3GXM9T5w9c/2b593/+wx/fz/99d/vsfvl3CFmYPNNdEEC0JEQxgVmmBxKVFmjxmlcTbAp5ljESlsY93nyIdryYZ+84IFTrMs3d96OE54oYAeeiHHccoh039sGdT2LdqFJ7FWqQx1YVvJQvlW8qwnGuR7TjxPpwp8tqddU/RaxxOXJR+U5VL+KNAzfCVYh2hCjv7HGuWBdiRapy+YB45Vi6nwnRug9h/AZoBcSzUrjyLN6p1UCPV4Gu8SkRrfEAlS6PqrWUoNr4C/HSZlDjbGJiRGsiDLKLQK6yPCvMhnQrQG55C0Tbkr7gvZGrIMy2UyHdtvxV7o5oVbDWmRS51uHc8C6P0n394tW3DdfBrQsJINpCgC2GrwTLSYEWQah7T6rcurzF74ZoxZHqTEj1qsPV4axUuQ6DhmiNB43q1XiA2i2PKrcd++Q7I9pkZHUGTIL97pef/vZwN9oDdbB7vcub+Xwux8RshhDRGovLv//XP//OJ7WMBcXPcmgrGI0VojUSGARrJBB9LAPhGosjom0cEATbOAB93x7hGokvom0UCATbCPyYt0W4jeOOaCsHAMFWBs7tlgQQbqN8QLSVwHOKoBJobhND4CzcH7/65ntOKcTgKr8G0ZYzPJwBwSoDZvoSAgi3hF7CWESbACvlUj5okEKLaxsT4ByucgAQrQLgRR+WDxoo8GVKNQJn4fIFNvJ8Ea0gU9oEgjCZqhUB2gkK5BGtAFTaBAIQmcIaAdoJghFBtIUwaRMUAmS4dQK0EwQihGgzIdImyATHMI8EaCcURg3RZgCkis2AxpAeCFDdZkYR0SaAo4pNgMWlvRKgus2ILKKNhEYVGwmKy0YhQHWbEGlEG4BFFZuQTVw6GgFOJkRGHNEegFpIlg8eRCYUlw1J4A3fm3Acd0S7w4dWwZDCYNP5BGglHLBDtCs4tArynzRGDk+AF2U7KYBoF2BoFQwvCgDIEKCVsOKIaB+A0CqQecKYBQIPBGglLFIB0Z5gIFnkAAEVAsj2AevQoqUfq/JwMSkElgTo255oDCta+rHYAAJVCQzdtx1StLQKqj5g3AwCM4FhWwnDiRbJ8tRDoCmBIWU7lGiRbNMHjJtDYNjKdhjR/un+rz8/RJmP0/LAQ6A9gfNLst/ufvi6/VL0V9C9aDlZoJ9E3AECmQSGkW3XouVkQWb6MwwC9QgMcfyrW9Ei2XpPCneCgACBro9/dSlaJCuQ9kwBgfoEupVtd6JFsvWfDu4IAUECXcq2K9EiWcF0ZyoItCPQnWy7ES2SbfdUcGcIKBDoSrZdiBbJKqQ5U0KgPYFuZOtetEi2/dPACiCgSKAL2boWLZJVTG+mhoAdAu5l61a0SNbOU8BKIFCBgGvZuhQtkq2Q1twCAvYIvPH63QguRfvwBTF8OYy9B4EVQUCTgNvvRnAnWr6FSzOPmRsC5gm4lK0r0fJ9suYfAhYIgRoE3H15uBvRItka+cs9IOCGgCvZuhAtknWT/CwUAjUJuJGtedFywqBm3nIvCLgj4OLYl2nRIll3Sc+CIdCCgHnZmhYtx7ha5Cz3hIBLAqbP2JoVLX1Zl8nOoiHQioDpfq1J0SLZVrnKfSHgmoBZ2ZoTLX1Z14nO4iHQmoDJfq0p0SLZ1jnK/SHQBQFzsjUlWl5+dZHkbAICFgiYejlmRrT0ZS3kJmuAQDcETPVrTYiWlkE3yc1GIGCJgJkWQnPRIllLeclaINAdARMthOaifWgZ/KW78LIhCEDAAgETLYSmoqUvayEPWQMEuifQXLbNREvLoPvkZoMQsESgab+2mWg5ymUpB1kLBIYg0Kxf20S0tAyGSGo2CQFrBJq1EKqLlpaBtdxjPRAYikCTFkJ10dIyGCqp2SwELBKo3kKoKlpaBhZzjjVBYDgC1avaaqKlZTBcMrNhCFgmUFW21UTLBxMs5xxrg8B4BP78hz/+4/WLV9/W2HkV0VLN1ggl94AABBIJVKtqq4iWF2CJ4edyCECgFoEqL8bURcsLsFr5wn0gAIEMAlXO1qqKlpZBRtgZAgEI1Cag3kJQFS0vwGrnC/eDAARyCGi/GFMTLdXsfrh/u/shJxcYAwERAqcC6Obdxw8ic3U0iWpVqyZaXoAh2o4ewq62gmh3w6n2YkxFtFSzx88lFW1X3nK3GUS7L9ofv/rm+5dPnr6VDqqKaKlmEa10ojKfHAFEe8hSpaoVFy3HucIPBBVtmBFX6BFAtMeiPb0Yey/9iTFx0VLNhh8QRBtmxBV6BBBtkK14VSsqWqrZYADPFyDaOE5cpUMA0Qa5in+IQVS0VLPBACLaOERcpUgA0UbBFa1qxURLNRsVPEQbj4krlQgg2iiwolWtmGipZqOCh2jjMXGlEgFEGw1WrKoVES3VbHTgEG0aKq5WIIBoo6GKVbUioqWajQ4cok1DxdUKBBBtElSRqrZYtFSzSUFDtOm4GCFMANEmARX5DoRi0VLNJgUN0abjYoQwAUSbDLS4qi0SLd9pkBwwRJuHjFGCBBBtMsziqrZItFSzyQFDtHnIGCVIANGmwyz9vtps0VLNpgdrHsEnw/LZMbKcAKLNYlhU1WaLlt+ekBUsKtp8bIwUIoBo80CWVLVZoqWazQsUFW0ZN0bLEEC02RyzX4pliZZqNjtQVLRl6BgtQADRZkPM/gBDlmh5CZYdKERbho7RAgQQbRHErKo2WbS0DYqChGjL8TFDIQFEWwQw66VYsmhpGxQFCdGW42OGQgKItgxgzkuxZNHSNigL0jSa413lDJkhnwCizWf3MDK5fZAkWr7XoDhAVLQyCJmlgACiLYD3eWhy+yBJtFSzxQFCtDIImaWAAKItgPf70KSqNlq0vAQTCQ6ilcPITJkEEG0muMthSVVttGh5CSYSHEQrh5GZMgkg2kxwq2EpL8WiRUvbQCY40yy8DJNjyUzpBBBtOrOdEdHtgyjR0jYQCwwVrSxKZssggGgzoG0PiW4fRImWtoFYYBCtLEpmyyCAaDOg7QyJbR9EiZa2gVxgaB3IsmS2dAKINp3ZwYio9kFQtLQNRINCRSuPkxkTCSDaRGDHl0e1D4KipW0gGhREK4+TGRMJINpEYIHLY9oHQdHSNpANCq0DeZ7MmEYA0abxirg62D44FC1tgwjEGZdwvCsDGkPECCBaMZTzRMH2QYxo/yW+rMEnRLSDJ0Dj7SNa+QD8+NU3//byydO3ezMfipb+rHxAaB3oMGXWeAKINp5V7JWhPu2haOnPxmJOu46KNo0XV8sSQLSyPB9mO+zT7oqW/qxKMM6Tnv7105vc0Mx3t89uTj9OGVrR/lJO+X5z//5XF2stXeS7jx9Kp2D8NYHDPu2uaGkbkEulBKZ/UF6/eFU6TZXxk2i/++WnKvfiJn0SOGof7IqWtkGfyVBzV4i2Jm3uZYDAbvsA0RqITq9LQLS9RpZ97RBIEy39WRJJggCilaDIHI4I7PZpNyta+rOOQmt4qYjWcHBYmgqBvT7tpmjpz6rEYLhJEe1wIWfDp1/ceDq++fUaBKIlNdQIIFo1tExsl0CcaOnP2o2gt5UhWm8RY70CBDb7tFcVLf1ZAdRMcSaAaEmEEQlsfe8Boh0xEyrtGdFWAs1tTBHYeiF2JVpehJmKmevFIFrX4WPx+QSu+rQXoqU/m0+WkdcEEC1ZMSiBKNHy/bODZof0thGtNFHmc0Lg6oXYRUXLizAnYXSyTETrJFAsU5zA+oUYohVHzIQzAURLLoxKYP1C7EK0vAgbNS109o1odbgyqwsCF31aROsiZj4XiWh9xo1VixDYFi0nDkTgMsmCAKIlHQYmcPFC7LGifRAtJw4GzgzprSNaaaLM54nA8oUYovUUOWdrRbTOAsZyRQlsipajXaKMmexEANGSBiMTWJ48eKxoEe3IKaGzd0Srw5VZfRDYFC1Hu3wEz9MqEa2naLFWBQKPJw8eK1pEq4B58CkR7eAJwPYvRcvRLjJCisAk1/nP3e2zm5dPnkpNrTrP6Rm4uX//6+M93n38oHo/Jh+CwOMRr3NFy9GuIYKetMm1MLcGe5Fo0sYPLp5kvPUHQUsR7m+e+eQBou0vtoc7mgU6VZvrP6OJUzv0W2KepUzFrE3fxvyI1kYcxFexJ1IkKo5aZMK1jBGxCFYzk1yIlqNdZuISvZC1UDVFGvMj87zwZaXm+WXYsnWy7DnXbqHM7BFw9KNh6sL5iNe5dYBoTcXmYjFaQj36sXZagMSPtp5Fm5sRod621D+ICDg3QnXHIdq6vKPuJilVCz+SjijaqECfLtJo8SzlK/EPZexeuG6fwIVoOUPbJlWmh21+KZVb6ViubBBtfl5J/aO7PLaGfPPjUTDyfJb23DpAtAUYE4YuH55UsVoW6h4CRJuQHJGXlgoY8UaClrsM0cqxPPzR4Vy15ojV+wsQRFsjwy7bELl5RrWrFitEq4V2bgnEJn2vvTVEq5Vh4Xlz2lJztYt0w3wTrvgs2v/43//+8rtffvrbaeDzhMFcuiKQI9epYu05qRGtnceE/GwWi/PHcGfR8psVMuNwghjdFhitYkC0mUmlPCxVuqfjn10XBMq4b6YPLSDaDMopiTqaXJc4EW1GclUekprLp59+K6/Q/+0QbUYMYytYqgB+w0JGejUdEvsP41Q8INz4UCHaeFZT+R/VIkCwv0ONfXATwqB2KfJIjxvM4tIR0UZwipUFSXcNM5ZdRBjULyF+14hjiouRW2OxSYloA6RiRUEVuw0yll9swmpeh2jLYsgzsJ+diPbgyY2VxOlTdZrPv+u5Yxla2CSiPY7C6SxoMEzIdhsRot1JnVhBkFjHz14sx+ATXOECRCsTS56JzRYMx7u20ivmX28ezLD9EG2YkacrYnq20374Ke8yqlS0G1kem0z8yx1WBKINM/J0Bc9GXrQQbYFoqWjDSYdow4w8XRErWp4NKtpgXse0DeZJ+BFJpq8XDEqFC5BDGHLsswFLRBvMpthkmiYioRBtMKE6uSC2muW54GVYVMqnJNQ0Ib3afay0DqJSzvxFqc8EBQgVbTCpc+RAYm1jzWEZDJDSBcRwG2yqZCk+qGijH9Gc5CLBrvEi2uiUM3dhbuz4BwvRJiVzSq92OTGf/f6dRu7DmhQooYsRxGeQpTHjBTGiTX4kc2U732j0h7f0oU0OWMGA0WOV+1PcEjmS3W2/PH4yjF9ls/OQSiTgqFUuoi0wf4WhKV/6fbSc0f+RCoTq86+y4deNhzNaUhgjSVeSWzhKZVeMIgspuc60OXUTzDt+C24Q0eoCiep23c+d/rvXX9I4P9RrzrG/HTg1PinXz795eB7TewykmY/yD1NKTu1ci2hzIEpXBCOJN4b3xFfqT8+/YXiP0fIfN2m5TvdEsMnZiWiTkS0GaAoX+ZZEZpyx2lJd5yG/Jywrt34X7anP8vfTv/5/yZqGQecjMXe3z6J+p5gErvnH3unH3enPiJWbBEcvc8xV/pRj0x+NSnWLxUjvE7Ry4RS7f7x+8erb88swRCuDubZw16te9h2RsExMa82ylmlNoW7lUa8961rxnO+DaJWJt5bukYSnv0PEygmwmn5LpC1lum4LzDnBT0eyeXEh2lMl9OWp//Iv2Vsw25KANfHu/ai4/t9nIdOiuCa2fHE3/1i/vKrWj/g5TxptgRxq6WOmL/0+5cHbc+sA0aYDLBlR8yVGyTpDY9dHpPauX8p6fU3NCmrvRMOWJLf2YlmcsbGiJRAiJfv3iFaWZ9Fsyx8rPT/MRRAYLEpgrlj5SUQUa/JkW6LlY7jJGPUG9FL16hFi5pnA8hRKzZ8QiECQwPnjt4+tg+ny0xdC/Hz6P8+DQ7mgGYFWx3yabZgbXxDgWJ+7hDifoZ1Wfe7RIlp3AbxYsKWjQb5Jtl89R/Tax0BwBdei5SytIF5DU1k+VmQIU7WlbH3HwnRzfuSvFoJqN5qPdl1UtIi2Gn9TN/J8RMkSyK0TGByNsxSh+mvZFC1HvOoHwtsd18ejQseivJ2gCB1XQ5zeMrbteucTBxcVLaJtG5Qe78730fYYVfYUS+BItBzxiqXIdUECiDaIiAv6JfB4tOuiop3+gyNe/Ua9xc4QbQvq3NMIgccTB4jWSER6XQai7TWy7CuCwL5oOXkQgY9Logkg2mhUXNgZgeWJg6uKlhdinUW78XYQbeMAcPtmBJYvwhBtszCMcWNEO0ac2eUVgYsXYXui5eQBmSNCANGKYGQSfwQu+rNXop3+B04e+Iuq1RUjWquRYV3KBMKi5YWYcggGmh7RDhRstvpIYP0ibLOi5YUYGSNFANFKkWQeTwTWL8KOREuf1lNkja4V0RoNDMvSJHD1ImxTtPRpNWMw1tyIdqx4s9szgav+LKIlM1QJIFpVvExukMBWf3ZXtLwQMxhBh0tCtA6DxpKLCCSJ9uGFGH3aIuQMRrTkwGAENvuzuxUtfdrB0kNpu4hWCSzTWiWw2Z9FtFbD1cm6EG0ngWQbUQT22gaHoqVPG8WWiw4IIFrSYyQCWaKlTztSiujsFdHqcGVWkwR2+7OHFS19WpPBdLUoROsqXCy2jMBufzYoWtoHZeRHH41oR8+AcfZ/1DYIipbvPRgnUTR2img1qDKnQQKHbYNY0XKe1mBkPSwJ0XqIEmsUIHDYNgiKlj6tQAgGngLRDhz8sbZeLlr6tGNljORuEa0kTeaySiDUn42qaDnmZTW89teFaO3HiBUWEwj2Z6NES/ugOBDDToBohw39SBsPtg2iRUv7YKS8kdsropVjyUw2CcS0DaJFS/vAZpCtrwrRWo8Q6yskENU2iBYt7YPCcAw6HNEOGvhxth3VNkgSLe2DcbJHaqeIVook81gkENs2SBIt7QOLoba9JkRrOz6srohAdNsgSbS0D4qCMuRgRDtk2IfYdEo1myxaqtohckhsk4hWDCUT2SKQVM0mi5aq1la0ra8G0VqPEOvLJBD9Emye/4tPnz4l3YuXYkm4hr4Y0Q4d/m43n9o2yKpoaR90mz/iG0O04kiZsD2B5LZBlmhpH7SPtJcVIFovkWKdCQSS2wbZon1oH9yeJniesEAuHYwAoh0s4P1vN6uazRYtVW3/GSWxQ0QrQZE5DBHIqmaLRMtLMUPhN7oURGs0MCwri0DOS7D5RsmnDuaBvBTLitVQgxDtUOHufbPZbYOiinYaTFXbe26V7Q/RlvFjtB0CJdVssWipau0kgsWVIFqLUWFNGQSKqtli0U4T/On+rz+f/g+nDzKi1/sQRNt7hIfZX/ZLsOIeLb3aYZIse6OINhsdA+0QKK5mRSpaqlo7GWFtJYjWWkRYTwaB4mpWTLR8gCEjfAMMQbQDBLnvLYpUs2KipartO9tyd4doc8kxzggBkWpWVLRUtUZSw9AyEK2hYLCUVAJvTvn7/vWLV9+mDty6PvsDC1uTcQJBIiT9zIFo+4nlgDsRq2ZFK9ppMqraAdPxYMuIlnxwSkCsNzvvX7SipVfrNK2Ulo1olcAyrTYB0WpWvKKdJuTTYto54Gd+ROsnVqz0kYB4NasiWqpaUnYmgGjJBYcExKtZNdFS1TpML4UlI1oFqEypSUClmlUT7TQx3+ylmQ8+5ka0PuLEKj8TKP2GriOO4i/D5ptR1ZK+iJYccERArZpVrWipah2lmNJSEa0SWKaVJiD64YStxalVtNPNqGql88HXfIjWV7wGXq3KC7AlT1XRLqpafmPugFmMaAcMur8tq1ez6q2DmTkfzfWXfRIrRrQSFJlDmYB6NVtNtLQQlFPF6PSI1mhgWNZMQPUFWNXWwXwzjnuNl92IdryYO9pxlZbBzEO9RzvfiKrWUQoKLRXRCoFkGg0CVVoG1UU73RDZauSL3TkRrd3YDL6yai2DJqKdbkoLYZwUR7TjxNrTTjU/AbbHoVrrgBaCp1SUWSuileHILKIEqlez0+qri3ZR1XK2VjR/7E2GaO3FZPAVNZFsM9HSQhgj3RHtGHH2sssWLYNmPVpaCF7SsnydiLacITOIEWhWzTataKebcwpBLIlMToRoTYZlxEU1lWxz0dKv7TvnEW3f8XWyu6ofTNhj0uRl2HoxfBeCk5RNXCaiTQTG5RoEqn4wwbRoaSFo5Ff7ORFt+xgMvoLmLYPmL8PWCfDwQQaOfHX0ZCDajoLpbysmWgbmREu/1l8mh1aMaEOE+HslAqYka+JlGP1apVQzMC2iNRCEMZdgoi+7RG/iZdhyQfRr+3kyEG0/sXS0EzN9WdOipYXgKKUDS0W0/cTSyU7MtQxM9miXweTlmJPUPlgmovUfQ0c7MCtZkz3aZWA5X+sozVkqBNoReDPd+re7H75ut4TjO5vr0dKvtZoqrAsCZgmYe/m1JmVatNNieTlmNrlZGAQsEDD58sudaKcF06+1kM+sAQLmCLiQrPke7TKsyNZckrMgCLQkYPrll8uKdl40sm2Z19wbAmYIuJKsq4oW2ZpJchYCgZYE3EnWpWinRT8c+5r+3+ctI869IQCBqgTMH+Pao2H+1MHewpFt1QTnZhBoTcCtZN1WtHPE+UBD69zn/hCoRsD8WdkjEm4r2mlTnLGtluTcCAItCbg5xtVd62DeELJtmf/cGwLqBNxL1n3rANmqJzk3gEBLAl1IthvR0kZo+SxwbwioEOhGsl2JFtmqJDuTQqAFga4k251okW2LZ4J7QkCUQHeS7VK0yFY06ZkMAjUJdCnZbkW7ku30n3yCrObjwr0gkEbg/GGEH7/65vuXT56+TRvq42rX52hjEPMJshhKXAOBZgRcf+Irllr3op1AINvYdOA6CFQlMIRku24drNOFr1is+gBxMwiECLj8Fq7Qpvb+foiKdt48ss1NE8ZBQJTAUJIdqqJFtqIPCpNBIJfAcJIdUrTTpqlsc58RxkGgiEC3x7dCVIZqHSxh8GU0odTg7yEgRqD741shUsOKdgKzkO30n5y1DWULfw+BdALDnCw4QjO0aOnbpj81jIBAAoEh+7FbfBDtAxX6tgmPD5dCIEwAyS4YIdoFDFoJ4aeHKyAQIDB8P5aKNvIZobqNBMVlELgkQBW7kxFUtDtgkC0OgUASASR7gAvRHsChlZD0oHHxmARoFUTEHdFGQKK6jYDEJSMSoIqNjDqijQTFBxwiQXHZKASG/ZRXToARbQK1Sbb373+9e/fxw+1pGB9wSGDHpd0QOFexd7fP7nv9km6NSCHaDKpUtxnQGNIDAarYzCgi2kxwVLeZ4BjmkQBVbGHUEG0hQE4mFAJkuGUCnCgQig6iFQLJyQQhkExjhQAnCgQjgWgFYVLdCsJkqlYEqGIVyCNaBahUtwpQmVKbAIJVJIxoleDyskwJLNNqEKBNoEF1MSeiVQaMcJUBM30JAU4TlNBLGItoE2CVXEr/toQeY4UJ0CYQBhqaDtGGCAn/PcIVBsp0KQQQbAotwWsRrSDMlKkQbgotri0kgGALAZYOR7SlBAvHL04oTDPx/QmFPBl+QQDBGkkIRGskEFS4RgLRxzIQrLE4IlpjAUG4xgLiazmcIjAaL0RrNDAcCzMaGJvLQrA24/K4KkRrPEAr4dLHNR6viss7twf4btiKxAtuhWgL4NUeSluhNnGT96P/ajIsx4tCtA6DRpXrMGhlS6Z6LePXfDSibR6CsgUg3TJ+hkcjV8PBSV0aok0lZvh6zuQaDk780mgNxLNycyWidROq+IVS5cazMnIl1auRQGgtA9FqkTUy7yTdaSmL3947/SefQGsbnwuxTkvhN8q2DYj23RGtNmFj81PtNgsIVWsz9O1vjGjbx6DZCmbpTgt49/HD7cNCqHZlIkLVKsOxi1kQbRdhlNkE4i3i+CjWaZa722f3tAOKeHY1GNF2FU7Zzez0d+nx3tycpTr9mT+ZNf3/iFU2/3qaDdH2FM0Ke1nKd5CWw1WlilQrJFpnt0C0nQW0xXZm+U73nk43rARsvQJ+rE7nCnX+0X9mSaXaIqv6uiei7Sue5nazlPC8uFnGG0KeLyl9IXchz6VA1xKlOjWXMl0uCNF2GVa/m9oSc85uqEJzqDFGi8D/AyV7d3ili2RPAAAAAElFTkSuQmCC"/></pattern></defs><g id="Group_398" data-name="Group 398" transform="translate(-12 -127)"><rect id="Rectangle_32" data-name="Rectangle 32" width="28" height="28" rx="4" transform="translate(12 127)" fill="#26a27b"/><rect id="Image_11" data-name="Image 11" width="28" height="28" rx="14" transform="translate(12 127)" fill="url(#pattern)"/></g></svg>',
                gas_img: '<img src="@/assets/img/gasLogo.svg" alt="gas" style="width:28px">',
                nft_img: '<img src="@/assets/img/NFT.png" alt="gas" style="width:28px">',
                pin_img: '<img src="@/assets/img/pin1.png" alt="pin" style="width:28px">',
                
            }
        },

        created() {
            this.lock_list(0);
        },
        

        methods: {
            goBack: function () {
                window.history.back();
            },

            usdtClick: function () {
                $('#record_title').text('USDT');
                $('#usdt_lock').css('opacity', '0.2');
                $('#gas_lock').css('opacity', '1');
                $('#nft_lock').css('opacity', '1');
                $('#pin_lock').css('opacity', '1');
                $('#token_lock').css('opacity', '1');
                $('.dropdown-content').hide();

                this.lock_list(0);
            },

            gasClick: function () {
                $('#record_title').text('Gas');
                $('#gas_lock').css('opacity', '0.2');
                $('#usdt_lock').css('opacity', '1');
                $('#nft_lock').css('opacity', '1');
                $('#pin_lock').css('opacity', '1');
                $('#token_lock').css('opacity', '1');
                $('.dropdown-content').hide();
                
                this.lock_list(1);
            },

            nftClick: function() {
                $('#record_title').text('NFT');
                $('#nft_lock').css('opacity', '0.2');
                $('#usdt_lock').css('opacity', '1');
                $('#gas_lock').css('opacity', '1');
                $('#pin_lock').css('opacity', '1');
                $('#token_lock').css('opacity', '1');
                $('.dropdown-content').hide();
                
                this.lock_list(2);
            },

            tokenClick: function() {
                $('#record_title').text('Token');
                $('#token_lock').css('opacity', '0.2');
                $('#usdt_lock').css('opacity', '1');
                $('#gas_lock').css('opacity', '1');
                $('#nft_lock').css('opacity', '1');
                $('#pin_lock').css('opacity', '1');
                $('.dropdown-content').hide();
                
                this.lock_list(3);
            },

            pinClick: function () {
                $('#record_title').text('PIN');
                $('#pin_lock').css('opacity', '0.2');
                $('#usdt_lock').css('opacity', '1');
                $('#gas_lock').css('opacity', '1');
                $('#nft_lock').css('opacity', '1');
                $('#token_lock').css('opacity', '1');
                $('.dropdown-content').hide();
                
                this.lock_list(4);
            },

            dropDownToggle: function() {
                $('.dropdown-content').toggle();
            },

            onLogout: function() {
                window.location.href = "/";
            },

            lock_list: function(ctypes) {
                 if(ctypes == this.types){
                    console.log(this.types);
                    console.log(ctypes);
                    // return false;
                }
                this.types = ctypes;
                
                /*
                var headers = {
                    // 'Access-Control-Allow-Origin' : '*',
                    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Content-Type':'application/json'
                }
                
                axios({
                        method:'GET',
                        url:'http://test.ait.capital/api/index/Api/mylock',
                        data: {type: ctypes},
                        withCredentials: true,
                        headers: headers
                    }) 
                    .then((res) => {
                        const data = res;
                        if (res.status != 200) {
                            // TODO: show error message
                            return false;
                        }
                        if(data.code == 1){
                            $('#lock_list').fadeOut(100, function() { 
                                $(this).html('');
                                $(this).fadeIn();
                                var arr = data.data;
                                var status_color;
                                var img;
                                // var name;
                                $.each(arr.list, function (i, item) {
                                    if(item.amount>=0){
                                        status_color = '<span style="color: #49E052;">+ ';
                                    }else{
                                        status_color = '<span>- ';
                                    }
                                    
                                    if(item.type == 1){
                                        img = this.gas_img;
                                    }else if(item.type == 2){
                                        img = this.nft_img;
                                    }else if(item.type == 4){
                                        img = this.pin_img;
                                    }else{
                                        img = this.usdt_img;
                                    }

                                    var build = '<section class="list-field"><div class="list-field-div"><section class="list-subfield">'+img+'<div><section><p>'+ item.currency+'</p><span>' + item.datetime +'</span></section></div></section><section class="list-subfieldbottom"><div style="padding-top: 3px;"><p>Remark</p><p>'+ item.description +'</p></div><div><p>Amount</p>' + status_color + Math.abs(item.amount) +' '+item.currency +'</span></div></section></div></section>';
                                    
                                    $('#lock_list').append(build);
                                });
                                
                                $('.lock-list-page').html(arr.page);
                            });
                        } else {
                            this.onLogout();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                */

               if(mylockJsonData.code == 1){
                   var data = [];
                   var lock_list = mylockJsonData.data.list;
                   console.log(lock_list);
                   for (let index = 0; index < lock_list.length; index++) {
                        data = [];
                        const element = lock_list[index];
                        data = element;

                        if(element.type == 1){
                            data.img = this.gas_img;
                        }else if(element.type == 2){
                            data.img = this.nft_img;
                        }else if(element.type == 4){
                            data.img = this.pin_img;
                        }else{
                            data.img = this.usdt_img;
                        }                        

                        this.locklist[index] = data;
                    }
                    this.page = mylockJsonData.data.page;
                }
            }
        }
    }
</script>