window.addEventListener('load', function () {
    console.warn("Welcome fellow power user OwO")
    //config.initialize()
    start_ticking()
})

//Config management object
let tock = 0
/*let config = {
    data: {//Loacal app data
        key: "APPname_cfg",
        usecount: 0,
    },
    initialize: function () {//starts up the config manager
        console.warn('Config handler is initalized')
        if (localStorage.getItem("APPname_cfg")) {
            this.load()
        } else {
            this.validate()
        }
    },
    save: async function () {//Save the config file
        console.warn('Configuration is being saved')
        localStorage.setItem("APPname_cfg", JSON.stringify(config.data))
        console.table(config.data)
    },
    load: function () {//Load the config file
        console.warn('Configuration is being loaded')
        config.data = JSON.parse(localStorage.getItem("APPname_cfg"))
        console.table(config.data)
        this.validate()
    },
    validate: function () {//validate configuration file
        console.warn('Config is being validated')
        var configisvalid = true

        if (typeof (config.data.usecount) == 'undefined') {
            config.data.usecount = 1
            configisvalid = false
            console.log('"usecount" did not exist and was set to default')
        }

        if (!configisvalid) {
            console.log('config was found to be invalid and will be overwritten')
            this.save()//Save new confog because old config is no longer valid
        } else { console.log('config was found to be valid') }
    },
    delete: function () {//Does not delete the file itself. Just sets it to empty
        localStorage.clear("APPname_cfg")
        console.log('config deleted: ')
        console.table(config.data)
        this.validate()
    }
}*/

function start_ticking(){
    const firstofHR = document.getElementById('hr1st');
    const secondofHR = document.getElementById('hr2t');
    const firstofmin = document.getElementById('min1st');
    const secondofmin = document.getElementById('min2st');
    const firstofsec = document.getElementById('sec1st');
    const secondofsec = document.getElementById('sec2st');
    const maridizer = document.getElementById('maridizer');
    const onesthr1 = document.getElementById('1sthr1');
    const onesthr0 = document.getElementById('1sthr0');
    const s2ndhr0 = document.getElementById('2ndhr0');
    const s2ndhr1 = document.getElementById('2ndhr1');
    const s2ndhr2 = document.getElementById('2ndhr2');
    const s2ndhr3 = document.getElementById('2ndhr3');
    const s2ndhr4 = document.getElementById('2ndhr4');
    const s2ndhr5 = document.getElementById('2ndhr5');
    const s2ndhr6 = document.getElementById('2ndhr6');
    const s2ndhr7 = document.getElementById('2ndhr7');
    clocktick()
    setInterval(() => { clocktick() }, 1000)

    function clocktick() {
        var date = new Date;
        //console.log(date.getHours())
        console.log(date.getHours(), date.getMinutes(), date.getSeconds())
        
        //Hours
        switch (date.getHours()) {
            case 0:// 12am
                firstofHR.style.transform = "translatey(-8vw)"
                secondofHR.style.transform = "translatey(-16vw)"
                maridizer.style.transform = "translatey(-0vw)"
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
                s2ndhr0.style.opacity = "0.4"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "1"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 1:// 1am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-8vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0.7"
                s2ndhr1.style.opacity = "1"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 2:// 2am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-16vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0.4"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "1"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 3:// 3am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-24vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0.1"
                s2ndhr1.style.opacity = "0.4"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "1"
                s2ndhr4.style.opacity = "0.7"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 4:// 4am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-32vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0.1"
                s2ndhr2.style.opacity = "0.4"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "1"
                s2ndhr5.style.opacity = "0.7"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 5:// 5am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-40vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0.1"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.7"
                s2ndhr5.style.opacity = "1"
                s2ndhr6.style.opacity = "0.7"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 6:// 6am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-48vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0.1"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.7"
                s2ndhr6.style.opacity = "1"
                document.getElementById('2ndhr7').style.opacity = "0.7"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 7:// 7am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-56vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0.1"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.7"
                document.getElementById('2ndhr7').style.opacity = "1"
                document.getElementById('2ndhr8').style.opacity = "0.7"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 8:// 8am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-64vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0"
                s2ndhr5.style.opacity = "0.1"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.7"
                document.getElementById('2ndhr8').style.opacity = "1"
                document.getElementById('2ndhr9').style.opacity = "0.7"
                break;
            case 9:// 9am
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-72vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0"
                s2ndhr5.style.opacity = "0"
                s2ndhr6.style.opacity = "0.1"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.7"
                document.getElementById('2ndhr9').style.opacity = "1"
                break;
            case 10:// 10am
                firstofHR.style.transform = "translatey(-8vw)";
                secondofHR.style.transform = "translatey(-0vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
                s2ndhr0.style.opacity = "1"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "0.4"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 11:// 11am
                firstofHR.style.transform = "translatey(-8vw)";
                secondofHR.style.transform = "translatey(-8vw)";
                maridizer.style.transform = "translatey(-0vw)";
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
                s2ndhr0.style.opacity = "0.7"
                s2ndhr1.style.opacity = "1"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 12:// 12pm
                firstofHR.style.transform = "translatey(-8vw)";
                secondofHR.style.transform = "translatey(-16vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
                s2ndhr0.style.opacity = "0.4"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "1"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 13:// 1pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-8vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0.7"
                s2ndhr1.style.opacity = "1"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 14:// 2pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-16vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
                s2ndhr0.style.opacity = "0.4"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "1"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 15:// 3pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-24vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0.1"
                s2ndhr1.style.opacity = "0.4"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "1"
                s2ndhr4.style.opacity = "0.7"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 16:// 4pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-32vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0.1"
                s2ndhr2.style.opacity = "0.4"
                s2ndhr3.style.opacity = "0.7"
                s2ndhr4.style.opacity = "1"
                s2ndhr5.style.opacity = "0.7"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 17:// 5pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-40vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0.1"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.7"
                s2ndhr5.style.opacity = "1"
                s2ndhr6.style.opacity = "0.7"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 18:// 6pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-48vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0.1"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.7"
                s2ndhr6.style.opacity = "1"
                document.getElementById('2ndhr7').style.opacity = "0.7"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 19:// 7pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-56vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0.1"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.7"
                document.getElementById('2ndhr7').style.opacity = "1"
                document.getElementById('2ndhr8').style.opacity = "0.7"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 20:// 8pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-64vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0"
                s2ndhr5.style.opacity = "0.1"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.7"
                document.getElementById('2ndhr8').style.opacity = "1"
                document.getElementById('2ndhr9').style.opacity = "0.7"
                break;
            case 21:// 9pm
                firstofHR.style.transform = "translatey(-0vw)";
                secondofHR.style.transform = "translatey(-72vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "0.7"
                onesthr0.style.opacity = "1"
    
                s2ndhr0.style.opacity = "0"
                s2ndhr1.style.opacity = "0"
                s2ndhr2.style.opacity = "0"
                s2ndhr3.style.opacity = "0"
                s2ndhr4.style.opacity = "0"
                s2ndhr5.style.opacity = "0"
                s2ndhr6.style.opacity = "0.1"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.7"
                document.getElementById('2ndhr9').style.opacity = "1"
                break;
            case 22:// 10pm
                firstofHR.style.transform = "translatey(-8vw)";
                secondofHR.style.transform = "translatey(-0vw)";
                maridizer.style.transform = "translatey(-8vw)";
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
    
                s2ndhr0.style.opacity = "1"
                s2ndhr1.style.opacity = "0.7"
                s2ndhr2.style.opacity = "0.4"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
            case 23:// 11pm
                firstofHR.style.transform = "translatey(-8vw)"
                secondofHR.style.transform = "translatey(-8vw)"
                maridizer.style.transform = "translatey(-8vw)"
                onesthr1.style.opacity = "1"
                onesthr0.style.opacity = "0.7"
                s2ndhr0.style.opacity = "0.7"
                s2ndhr1.style.opacity = "1"
                s2ndhr2.style.opacity = "0.7"
                s2ndhr3.style.opacity = "0.4"
                s2ndhr4.style.opacity = "0.4"
                s2ndhr5.style.opacity = "0.4"
                s2ndhr6.style.opacity = "0.4"
                document.getElementById('2ndhr7').style.opacity = "0.4"
                document.getElementById('2ndhr8').style.opacity = "0.4"
                document.getElementById('2ndhr9').style.opacity = "0.4"
                break;
        }
    
        //Minutes
        switch (date.getMinutes()) {
            case 0:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 1:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 2:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 3:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 4:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 5:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 6:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 7:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 8:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 9:
                firstofmin.style.transform = "translatey(-0vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
            case 10:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 11:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 12:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 13:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 14:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 15:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 16:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 17:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 18:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 19:
                firstofmin.style.transform = "translatey(-8vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
            case 20:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 21:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 22:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 23:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 24:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 25:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 26:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 27:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 28:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 29:
                firstofmin.style.transform = "translatey(-16vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
            case 30:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 31:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 32:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 33:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 34:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 35:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 36:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 37:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 38:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 39:
                firstofmin.style.transform = "translatey(-24vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
            case 40:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 41:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 42:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 43:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 44:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 45:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 46:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 47:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 48:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 49:
                firstofmin.style.transform = "translatey(-32vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
    
            case 50:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-0vw)";
                break;
            case 51:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-8vw)";
                break;
            case 52:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-16vw)";
                break;
            case 53:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-24vw)";
                break;
            case 54:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-32vw)";
                break;
            case 55:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-40vw)";
                break;
            case 56:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-48vw)";
                break;
            case 57:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-56vw)";
                break;
            case 58:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-64vw)";
                break;
            case 59:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-72vw)";
                break;
            default:
                firstofmin.style.transform = "translatey(-40vw)";
                secondofmin.style.transform = "translatey(-72vw)";
        }
    
        //Seconds
        switch (date.getSeconds()) {
            case 0:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 1:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 2:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 3:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 4:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 5:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 6:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 7:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 8:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 9:
                firstofsec.style.transform = "translatey(-0vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
            case 10:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 11:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 12:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 13:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 14:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 15:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 16:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 17:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 18:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 19:
                firstofsec.style.transform = "translatey(-8vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
            case 20:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 21:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 22:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 23:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 24:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 25:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 26:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 27:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 28:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 29:
                firstofsec.style.transform = "translatey(-16vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
            case 30:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 31:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 32:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 33:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 34:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 35:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 36:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 37:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 38:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 39:
                firstofsec.style.transform = "translatey(-24vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
            case 40:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 41:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 42:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 43:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 44:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 45:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 46:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 47:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 48:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 49:
                firstofsec.style.transform = "translatey(-32vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
    
            case 50:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-0vw)";
                break;
            case 51:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-8vw)";
                break;
            case 52:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-16vw)";
                break;
            case 53:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-24vw)";
                break;
            case 54:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-32vw)";
                break;
            case 55:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-40vw)";
                break;
            case 56:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-48vw)";
                break;
            case 57:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-56vw)";
                break;
            case 58:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-64vw)";
                break;
            case 59:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-72vw)";
                break;
            default:
                firstofsec.style.transform = "translatey(-40vw)";
                secondofsec.style.transform = "translatey(-72vw)";
        }
        tock++;
        if (tock > 23) { tock = 0 }
    }
    
}
