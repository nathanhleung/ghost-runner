angular.module('ghostApp.pace', [])
  .controller('PaceCtrl', PaceCtrl);

function PaceCtrl() {
  // Actual pace = 600 - this.pace
  this.pace = 600 - 300;
  this.getTimeString = (pace) => {
    let minutes = Math.floor(pace / 60).toString();
    let seconds = (pace % 60).toString();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };
}
