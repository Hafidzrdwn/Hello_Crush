let ident = '', gen=[' Ganteng',' Cantik'], decision='',count=0,ex=0,title=['','','Aku cuman mau ngomong sesuatu..','Sebenernya aku sayang sama kamu..'];
const regex = /\d/;

function main(){
const input = Swal.fire({
  title: 'Hello Crush !!',
  input: 'text',
  cancelButtonText:
    '<i class="fas fa-times"></i> Close',
  inputLabel: "What's Your Name?",
  inputPlaceholder:"Enter your name..",
  imageUrl:"icon/main.png",
  reverseButtons:true,
  confirmButtonText:'Next',
  customClass:{
    confirmButton:"confirm",
    cancelButton:"cancel",
    actions:"standard"
  },
  showCancelButton: true,
  allowOutsideClick:false,
  inputValidator: (value) => {
    const haveNumber = regex.test(value);
    // Get user name and save value in var ident 
    ident = value;
    if (!value) {
      return 'Input harus diisi ya, tidak boleh kosong !'
    }
    else if(haveNumber===true){
      return 'Nama tidak boleh mengandung angka ya !'
    }
    else if(value.length < 3 || value.length > 20){
      return 'Input harus diisi minimal 3 huruf maksimal 20 huruf !'
    } 
  }
}).then((result) => {
  decision=result
    gender(decision)
  })
};

function flow(value){
   if(value === 'Man'){
    value = 0;
      same(value,ident,gen)
  }
  else if(value === 'Woman'){
    value = 1;
    same(value,ident,gen)
  }
}

function same(value,ident,gen){
  swal.fire({
    imageUrl:"icon/" + value + ".png",
    title: "Haaii " + ident +  gen[value],
    text:"coba tekan next",
    allowOutsideClick:false,
    showCancelButton:true,
    reverseButtons:true,
    confirmButtonText:"Next",
    customClass:{
      actions:"full",
      confirmButton:"confirm",
      cancelButton:"cancel",
    },
    cancelButtonText:
    '<i class="fas fa-arrow-left"></i> Back',
  }).then((result) => {
    if(result.isConfirmed){
      swal.fire({
        title:title[2],
        imageUrl:"icon/2.png",
        showConfirmButton:true,
        allowOutsideClick:false,
        customClass:{
          confirmButton:"btn-ok",
        }
      }).then((result)=>{
        swal.fire({
          title:title[3],
          imageUrl:"icon/3.png",
          showConfirmButton:true,
          allowOutsideClick:false,
          customClass:{
            confirmButton:"btn-ok",
          }
        }).then((result)=>{
          swal.fire({
            title:"I LOVE YOU",
            imageUrl:"icon/heart.png",
            showConfirmButton:true,
            allowOutsideClick:false,
            customClass:{
              confirmButton:"btn-ok",
              popup:"red",
            }
          }).then((result)=>{
            swal.fire({
              title:"Kamu sayang sm aku nggak ?",
              imageUrl:"icon/mark.png",
              showConfirmButton:true,
              showCancelButton:true,
              reverseButtons:true,
              allowOutsideClick:false,
              cancelButtonText:
                '<i class="fas fa-times"></i> Nggak',
              confirmButtonText:"Sayang",
              customClass:{
                confirmButton:"confirm",
                cancelButton:"cancel",
                actions:"standard",
              }
            }).then((result)=>{
              if(result.isConfirmed){
                swal.fire({
                  allowOutsideClick:false,
                  title:"Aku juga sayang sama kamuu",
                  imageUrl:"icon/charity.png",
                  showConfirmButton:true,
                  confirmButtonText:"Ok,Makasih",
                  customClass:{
                    confirmButton:"btn-ok",
                    popup:"red",
                  }
                }).then((result)=>{
                  count=0;
                  ex=1;
                  toast(count,ex)
                })
              }
              else if(result.dismiss === Swal.DismissReason.cancel){
                swal.fire({
                  allowOutsideClick:false,
                  title:"Yaudah gapapa aku tetep sayang sama kamuu",
                  icon:"success",
                  showConfirmButton:true,
                  customClass:{
                    confirmButton:"btn-ok",
                  }
                }).then((result)=>{
                  count=0;
                  ex=1;
                  toast(count,ex)
                })
              }
            })
          })
        })
      })
    }
    else if(Swal.DismissReason.cancel){
      gender(decision)
    }
  })
}

function gender(result){
  if (result.isConfirmed) {
    swal.fire({
      allowOutsideClick:false,
      showCloseButton:true,
      showCancelButton:true,
      reverseButtons:true,
      imageUrl:"icon/ey.png",
      confirmButtonText:'Next',
      customClass:{
        confirmButton:"confirm",
        cancelButton:"cancel",
        actions:"standard",
        closeButton:"close",
      },
      cancelButtonText:
  '<i class="fas fa-arrow-left"></i> Back',
      title:"Your Gender",
      input:"radio",
      inputOptions:{
          'Man': "Man",
          'Woman': "Woman"
      },
      inputValidator: (value) => {
        if (!value) {
          count++;
          toast(count)
          return 'Pilih salah satu, tidak boleh kosong!'
        }  
        flow(value)
        },
    }).then((result) => {
      if (result.isConfirmed) {
        result = value;
      } else if (result.dismiss === Swal.DismissReason.close) {
        swal.fire({
          title:"Cancelled",
          icon:"error",
          showCancelButton:true,
          reverseButtons:true,
          cancelButtonText: 
          '<i class="fas fa-redo-alt"></i> Repeat',
          confirmButtonText:"Yes",
          text:"Are you sure ?",
          customClass:{
            popup:"red",
            confirmButton:"btn-ok",
            actions:"full",
            cancelButton:"cancel",
          },
          allowOutsideClick:false,
        }).then((result) => {
            if(result.isConfirmed){
             count=0;
             ex+=1;
             toast(count,ex)
            }
            else if(result.dismiss === Swal.DismissReason.cancel){
              main()
            }
        })
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        count = 0;
        main()
      }
    })
  } 
  else if (result.isDismissed) {
    Swal.close()
  }
}

function toast(count,ex){
          if(count >= 3){
            tata.error('Error', 'Pilih gendermu !', {
              position: 'tr',
              animate:"slide",
              duration:"2000",
            })
          }
          else if(count === 0 && ex === 1){
          tata.success('Terimakasih', 'telah menggunakan app ini', {
            position: 'br',
            animate:"slide",
            duration:"2000",
          })
        }
}



