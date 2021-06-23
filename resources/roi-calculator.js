var app = new Vue({
    el: '#app',
    data: {
      showInvestmentDetails: true,
      showFleetDetails: false,
      years: 1,
      
      nv: 1,
      tc: 39,
      vt: "Heavy Vehicles",
      
      a1: 60,
      b1: 20,
      c1: 20,
      d1: 0.9,
      e1: 2.5,
      f1: 380,

      a2: 2500,
      b2: 6.5,
      c2: 4,

      a3: 12,
      b3: 1,
      c3: 2,
      d3: 32,
      e3: 50,

      a4: 15,
      b4: 15,
      c4: 30,
      d4: 24,

      a5: 20



    },
    methods: {
      setLicensePeriod: function(period){
        this.years = period;
      },

      vehicleTypeChanged: function(){
        if(this.vt == "Cars"){
          this.d1 = 0.2;
          this.f1 = 93;
          this.b2 = 26;
        } else if (this.vt == "Light Trucks") {
          this.d1 = 0.8;
          this.f1 = 175;
          this.b2 = 18;
        } else if (this.vt == "Heavy Vehicles") {
          this.d1 = 0.9;
          this.f1 = 380;
          this.b2 = 6.5;
        }
      }
    },
    computed: {
      nm(){
        return this.years * 12;
      },
      i1(){
        return ((this.c1 * this.nm * this.nv * this.d1 * this.e1) * (this.a1 / 60)) - ((this.c1 * this.nm * this.nv * this.d1 * this.e1) * (((this.a1 - ((this.b1 * this.a1) / 100))) / 60));
      },
      i2(){
        return Math.round((this.nm * this.nv * this.e1 * (this.a2 / this.b2)) - (this.nm * this.nv * this.e1 * (((this.a2 - ((this.c2 * this.a2)/ 100))) / this.b2)));
      },
      i3(){
        return ((this.nm / this.a3) * this.nv * this.b3 * this.c3 * this.d3) - ((this.nm / this.a3) * (this.e3 / 100) * this.nv * this.b3 * this.c3 * this.d3);
      },
      i4(){
        return ((52 / (60 / this.a4)) * this.d4) * this.years * this.nv + ((52  / (60 / this.b4)) * this.c4) * this.years * this.nv;
      },
      i5(){
        return this.a5 * this.nm * this.nv;
      },
      i6(){
        return this.f1 * this.nm * this.nv;
      },
      a(){
        return this.nm * this.tc * this.nv;
      },
      b(){
        return this.i1 + this.i2 + this.i3 + this.i4 + this.i5 ;
      },
      c(){
        return this.b - this.a;
      },
      d(){
        return Math.round(this.a / (this.b / 12));
      },
      e(){
        return Math.round((this.c / this.a) * 100);
      }

    }
  })




