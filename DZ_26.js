

const parentID = document.getElementById('parent')
const smileID1 = document.getElementById('smile_1')
const smileID2 = document.getElementById('smile_2')
const smileID3 = document.getElementById('smile_3')
const smileID4 = document.getElementById('smile_4')
const smileID5 = document.getElementById('smile_5')
 let number = 1
smileID1.innerHTML = number;
smileID2.innerHTML = number;
smileID3.innerHTML = number;
smileID4.innerHTML = number;
smileID5.innerHTML = number;
console.log(smileID1)

parentID.addEventListener('click', (e) =>{
    if (e.target && e.target.nodeName === 'LI') {
        if (e.target === smileID1) {
            let countPlus = smileID1.innerHTML;
            console.log(countPlus)
            smileID1.innerHTML++;
            console.log(e.target === smileID1)

        } else if(e.target === smileID2) {
            let countPlus = smileID2.innerHTML;
            console.log(countPlus)
            smileID2.innerHTML++;
        } else if(e.target === smileID3) {
            let countPlus = smileID3.innerHTML;
            console.log(countPlus)
            smileID3.innerHTML++;
        } else if(e.target === smileID4) {
            let countPlus = smileID4.innerHTML;
            console.log(countPlus)
            smileID4.innerHTML++;
        }  else if(e.target === smileID5) {
            let countPlus = smileID5.innerHTML;
            console.log(countPlus)
            smileID5.innerHTML++;
        }




        // console.log(e.target.id)
        console.log(e.target)
        console.log(e.target.nodeName)
    }
})

