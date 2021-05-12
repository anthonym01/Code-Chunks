const main_content = new Vue({
    el:'#main-content',
    data:{
        files: [],
        dataToSend: [],
    },
    methods:{
        addFiles(files){ // adds files that has been dragged and dropped
            this.files = [...files];
            console.log(this.files);
        },
        removeItem(instance){ // need to test this function
            this.files.pop();
            // this.files.forEach((file, index) => {
            //     if(instance === file)
            //         this.files.remove(this.files[index]);
            // })
        },
        updateBorderStyle(type){ // updates borderstyle
            if(type === 'dashed')
                document.querySelector('.drag-area').style.setProperty('--borderStyle', type);
            else
                document.querySelector('.drag-area').style.setProperty('--borderStyle', type);
        },
        updateThumbnail(type){ // updates the dragarea when a single Image is uploaded
            setTimeout(() => {
                if(type === 'single'){
                    this.updateBorderStyle('none');

                    // getting reference to the following elements
                    let imagesize = document.querySelector('#sThumbnail [name="size"]');
                    let imagename = document.querySelector('#sThumbnail [name="name"]');
                    let image = document.querySelector('#uploadedImage');

                    let reader = new FileReader(); // initializing file reader
    

                    reader.readAsDataURL(this.files[0]);
                    reader.onload = () => { // asynchronously reading a files content
                        imagename.innerText = this.files[0].name; // naming the file
                        if(this.files[0].size.toString().length == 6) // attaching KB to size 
                            imagesize.innerText = this.files[0].size.toString().slice(0, 3) + 'KB';
                        else if(this.files[0].size.toString().length >= 7) // attaching MB to size
                        imagesize.innerText = this.files[0].size.toString().slice(0, 1) + 'MB';
                        image.src = reader.result;
                    };
                }
            });
        }
    }
});

const sidenav = new Vue({
    el:'#sidenav'
});

document.querySelectorAll('#file-selector').forEach( inputElement => {

    const dropzone = document.querySelector('.drag-area');
    dropzone.addEventListener('dragover', event => {
        event.preventDefault(); // prevents event from bubbling  
        if(!main_content.files.length)
            main_content.updateBorderStyle('solid');
        dropzone.classList.add('isdraggedover');
        console.log('dragover');
    });

    ['dragleave', 'dragend'].forEach(eventType => {
        dropzone.addEventListener(eventType, event => {
            dropzone.classList.remove('isdraggedover');
            main_content.updateBorderStyle('dashed');
        });
    });

    dropzone.addEventListener('drop', event => {
        event.preventDefault();
        main_content.addFiles(event.dataTransfer.files);
    });
});