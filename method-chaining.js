// Navi asked in second round


function computeAmount(){
    return {
        total:0,
        lack: function(n){
            this.total+= n* (10**5);
            return this;
        },
        crore: function(n){
            this.total += n * (10 ** 7);
            return this;
        },
        thousands: function(n){
            this.total += n * (10 ** 3);
            return this;
        },
        value: function(){
            return this.total;
        }
    }
}
const res = computeAmount().lack(5).crore(10).lack(2).thousands(30).value()
console.log(res)