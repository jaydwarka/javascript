var auto = {
    merk: "ford",
    type: "mondeo,",
    wielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("toet")
    }
}
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeteren();
