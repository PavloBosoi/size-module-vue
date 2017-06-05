'use strict';

$(function () {


    var calc = Vue.component('calc', {
        template: '#size-calc-template',
        components: {
            Multiselect: window.VueMultiselect.default
        },
        data: function(){
            return {
                minSize: 8,
                maxSize: 54,
                priceOld: '',
                priceNew: '',
                selectedLeftPrice: 0,
                selectedRightPrice: 0,
                customSelected: false,
                standartChecked: 0,
                standartData: [
                    {
                        sizeH: '5',
                        sizeW: '7',
                        oldPrice: '$37.09',
                        newPrice: '$4.82'
                    },
                    {
                        sizeH: '8',
                        sizeW: '8',
                        oldPrice: '$38.32',
                        newPrice: '$4.98'
                    },
                    {
                        sizeH: '11',
                        sizeW: '14',
                        oldPrice: '$113.43',
                        newPrice: '$14.75'
                    },
                    {
                        sizeH: '16',
                        sizeW: '20',
                        oldPrice: '$165.34',
                        newPrice: '$21.49'
                    },
                    {
                        sizeH: '20',
                        sizeW: '30',
                        oldPrice: '$282.39',
                        newPrice: '$36.71'
                    }

                ],
                customData: [
                    {
                        sizeH: '8',
                        sizeW: '8',
                        oldPrice: '$38.32',
                        newPrice: '$4.98'
                    },
                    {
                        sizeH: '9',
                        sizeW: '8',
                        oldPrice: '$116.44',
                        newPrice: '$15.14'
                    },
                    {
                        sizeH: '10',
                        sizeW: '8',
                        oldPrice: '$80.59',
                        newPrice: '$10.48'
                    },
                    {
                        sizeH: '11',
                        sizeW: '8',
                        oldPrice: '$129.18',
                        newPrice: '$16.79'
                    },
                    {
                        sizeH: '9',
                        sizeW: '9',
                        oldPrice: '$123.74',
                        newPrice: '$16.09'
                    },
                    {
                        sizeH: '11',
                        sizeW: '14',
                        oldPrice: '$116.44',
                        newPrice: '$15.14'
                    },
                    {
                        sizeH: '16',
                        sizeW: '20',
                        oldPrice: '$165.34',
                        newPrice: '$21.49'
                    },
                    {
                        sizeH: '20',
                        sizeW: '30',
                        oldPrice: '$282.39',
                        newPrice: '$36.71'
                    }
                ],
                valueL: this.minSize,
                valueR: this.minSize,
                options: ''
            }
        },
        methods: {
            range: function(min,max){
                this.valueL = min;
                this.valueR = min;
                var array = [],
                    j = 0;
                for(var i = min; i <= max; i++){
                    array[j] = i;
                    j++;
                }
                return array;
            },
            computedValue: function(event){
                this.customSelected = false;
                this.priceOld = event.target.dataset.old;
                this.priceNew = event.target.dataset.new;

                this.selectedLeftPrice = this.minSize;
                this.selectedRightPrice = this.minSize;
                for(var i = 0; i < this.standartData.length; i++){
                    if(i == this.standartChecked && this.standartData[i].sizeH > this.minSize){
                        this.selectedLeftPrice = this.standartData[i].sizeH;
                        this.selectedRightPrice = this.standartData[i].sizeW;
                    }
                }
            },
            selectedPrice: function(){
                this.customSelected = true;
                for(var i = 0; i < this.customData.length; i++){
                    if(this.selectedLeftPrice == this.customData[i].sizeH && this.selectedRightPrice == this.customData[i].sizeW){
                        this.priceOld = this.customData[i].oldPrice;
                        this.priceNew = this.customData[i].newPrice;
                    }
                }
            },
            customLabel: function(option){
                return option;
            },
            onChange: function(){
                this.customSelected = true;
                for(var i = 0; i < this.customData.length; i++){
                    if(this.valueL == this.customData[i].sizeH && this.valueR == this.customData[i].sizeW){
                        this.priceOld = this.customData[i].oldPrice;
                        this.priceNew = this.customData[i].newPrice;
                    }
                }
            }
        },
        mounted: function(){
                /*if(this.selectedLeftPrice === 0){
                    this.selectedLeftPrice = this.minSize;
                }
                if(this.selectedRightPrice === 0){
                    this.selectedRightPrice = this.minSize;
                }*/
                for(var i = 0; i < this.standartData.length; i++){
                    if(i == this.standartChecked){
                        this.priceOld = this.standartData[i].oldPrice;
                        this.priceNew = this.standartData[i].newPrice;
                    }
                }
            },
    });


    var sizeModule = new Vue({
        el: '#size-module',
        data: {
            valueL: '',
            valueR: '',
            options: ''
        }
    });

    //sizeModule.initialize();

    //form-styler
    //$('input, select').styler();


});