// import bootstrap from 'bootstrap';
// import domready from 'domready';
// import objectFitImages from 'object-fit-images';

import './common.scss';

// domready(() => {
//
// });

function spin(spin) {
    if(spin == true) {
        document.getElementById("overlay").style.width = "100%";
        setTimeout(function() {
            document.getElementById("overlay").style.width = "0%";
        }, 15000);
    } else {
        document.getElementById("overlay").style.width = "0%";
    }
}
