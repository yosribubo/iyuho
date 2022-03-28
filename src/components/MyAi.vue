<template>
    <section>
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
                <p>AI Transactions</p>
            </section>
        </header>
        <main id="ai_transaction" class="top end-line">
            <section class="transaction-field">
                <div class="transaction-field-div">
                    <section class="transaction-subfield">
                        <img src="{{aiList.src}}" alt="">
                        <div>
                            <section>
                                <p>Binance</p>
                                <span>{{aiList.succ}}</span>
                            </section>
                            <section>
                                <p style="   margin: 0;
                                            padding: 0;
                                            font-family: 'Outfit-Regular';
                                            color: #CECECE;
                                            font-size: 10px;">{{aiList.info}}</p>
                                <p>Sell/Short</p>
                            </section>
                        </div>
                    </section>
                    <section class="{{aiList.class_subfieldbottom}}">
                        <div style="padding-top: 3px;">
                            <p>Buy Price</p>
                            <p>{{aiList.buy_price}}</p>
                        </div>
                        <div>
                            <p>Sell Price</p>
                            <p>{{aiList.sell_price}}</p>
                        </div>
                        <div>
                            <p>P/L</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5">
                                    <path id="Polygon_3" data-name="Polygon 3" d="M4.293.707a1,1,0,0,1,1.414,0L8.293,3.293A1,1,0,0,1,7.586,5H2.414a1,1,0,0,1-.707-1.707Z" transform="translate(10 5) rotate(180)" fill="#ff4d54"></path>
                                </svg>
                                <span>{{aiList.pl}}</span>
                            </span>
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <div class="list-page ai-list-page" style="margin-top:5%;">
        </div>
    </section>
</template>

<script>
// export default {
//     data: function() {
//         return {
//                 aiLists: [],
//                 reqUrl: ''
//             };
//     },

//     mounted() {
//         const url = '';
//         axios(sthis.reqUrl)
//         .then(data => {
//           this.allAi = data.data
//         });
//     },

//     setup() {
        
//     },
//     method: {
//         goBack: () => {
//             window.history.back();
//         }
//     }
// }
</script>