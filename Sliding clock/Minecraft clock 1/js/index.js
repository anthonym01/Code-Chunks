const firstofHR = document.getElementById('hr1st');
const secondofHR = document.getElementById('hr2t');
const firstofmin = document.getElementById('min1st');
const secondofmin = document.getElementById('min2st');
const firstofsec = document.getElementById('sec1st');
const secondofsec = document.getElementById('sec2st');

window.addEventListener('load', function () {
    console.warn("Welcome fellow power user OwO")
    //config.initialize()
    clocktick()
    setInterval(() => { clocktick() }, 1000)
})

//Config management object
let config = {
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
}

function clocktick() {
    var date = new Date;
    //console.log(date.getHours())
    console.log(date.getHours(),date.getMinutes(),date.getSeconds())

    //Hours
    switch (date.getHours()) {
        case 0:// 12am
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-40vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 1:// 1am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-20vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 2:// 2am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-40vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 3:// 3am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-60vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 4:// 4am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-80vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 5:// 5am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-100vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 6:// 6am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-120vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 7:// 7am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-140vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 8:// 8am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-160vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 9:// 9am
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-180vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 10:// 10am
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-0vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 11:// 11am
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-20vh)";
            document.getElementById('maridizer').style.transform = "translatey(-0vh)";
            break;
        case 12:// 12pm
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-40vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 13:// 1pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-20vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 14:// 2pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-40vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 15:// 3pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-60vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 16:// 4pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-80vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 17:// 5pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-100vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 18:// 6pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-120vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 19:// 7pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-140vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 20:// 8pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-160vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 21:// 9pm
            firstofHR.style.transform = "translatey(-0vh)";
            secondofHR.style.transform = "translatey(-180vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 22:// 10pm
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-0vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
        case 23:// 11pm
            firstofHR.style.transform = "translatey(-20vh)";
            secondofHR.style.transform = "translatey(-20vh)";
            document.getElementById('maridizer').style.transform = "translatey(-20vh)";
            break;
    }

    //Minutes
    switch (date.getMinutes()) {
        case 0:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 1:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 2:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 3:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 4:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 5:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 6:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 7:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 8:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 9:
            firstofmin.style.transform = "translatey(-0vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
        case 10:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 11:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 12:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 13:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 14:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 15:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 16:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 17:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 18:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 19:
            firstofmin.style.transform = "translatey(-20vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
        case 20:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 21:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 22:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 23:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 24:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 25:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 26:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 27:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 28:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 29:
            firstofmin.style.transform = "translatey(-40vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
        case 30:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 31:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 32:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 33:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 34:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 35:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 36:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 37:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 38:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 39:
            firstofmin.style.transform = "translatey(-60vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
        case 40:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 41:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 42:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 43:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 44:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 45:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 46:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 47:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 48:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 49:
            firstofmin.style.transform = "translatey(-80vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
                
        case 50:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-0vh)";
        break;
        case 51:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-20vh)";
        break;
        case 52:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-40vh)";
        break;
        case 53:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-60vh)";
        break;
        case 54:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-80vh)";
        break;
        case 55:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-100vh)";
        break;
        case 56:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-120vh)";
        break;
        case 57:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-140vh)";
        break;
        case 58:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-160vh)";
        break;
        case 59:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-180vh)";
        break;
        default:
            firstofmin.style.transform = "translatey(-100vh)";
            secondofmin.style.transform = "translatey(-180vh)";
    }

    //Seconds
    switch (date.getSeconds()) {
        case 0:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 1:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 2:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 3:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 4:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 5:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 6:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 7:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 8:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 9:
            firstofsec.style.transform = "translatey(-0vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
        case 10:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 11:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 12:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 13:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 14:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 15:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 16:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 17:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 18:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 19:
            firstofsec.style.transform = "translatey(-20vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
        case 20:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 21:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 22:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 23:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 24:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 25:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 26:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 27:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 28:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 29:
            firstofsec.style.transform = "translatey(-40vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
        case 30:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 31:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 32:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 33:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 34:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 35:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 36:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 37:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 38:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 39:
            firstofsec.style.transform = "translatey(-60vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
        case 40:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 41:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 42:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 43:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 44:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 45:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 46:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 47:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 48:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 49:
            firstofsec.style.transform = "translatey(-80vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
                
        case 50:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-0vh)";
        break;
        case 51:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-20vh)";
        break;
        case 52:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-40vh)";
        break;
        case 53:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-60vh)";
        break;
        case 54:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-80vh)";
        break;
        case 55:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-100vh)";
        break;
        case 56:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-120vh)";
        break;
        case 57:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-140vh)";
        break;
        case 58:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-160vh)";
        break;
        case 59:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-180vh)";
        break;
        default:
            firstofsec.style.transform = "translatey(-100vh)";
            secondofsec.style.transform = "translatey(-180vh)";
    }
}

//stuff
function get_url_variables(url) {//Gets url variables as an object
    if (url == undefined) { url = window.location.href }
    //Yoinked from
    //https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
    //returns Object { "": "undefined" } if empty
    //Call with var this_url = getParams(window.location.href);
}

async function close() {//Close the app
    config.save()
    window.close()
}

async function clipboard(textpush) {
    copyText.toString()
    var temptxtbox = document.createElement("input")
    document.body.appendChild(temptxtbox)
    temptxtbox.setAttribute("id", "temp_copy")
    document.getElementById("temp_copy").value = textpush
    temptxtbox.select()
    document.execCommand("copy")
    document.body.removeChild(temptxtbox)
}

let rand = {
    HEX: function () { return '#' + Math.floor(Math.random() * 16777215).toString(16) },
    RGB: function () { return { RED: this.number(255, 0), GREEN: this.number(255, 0), BLUE: this.number(255, 0) } },
    HSL: function () { return { HUE: this.number(360, 0), SATURATION: this.number(100, 0) + '%', LIGHTENESS: this.number(100, 1) + '%' } },
    number(max, min) { return Math.floor(Math.random() * (max - min + 1)) + min }
}

function linkify(text) {//Detects links in text
    //https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
    var urlRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;/*/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig*/;
    return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
}

function testlinkify() {
    var lonk = 'https://www.youtube.com/watch?v=6lCQKe0adKk'
    document.body.innerHTML = linkify(lonk)
}