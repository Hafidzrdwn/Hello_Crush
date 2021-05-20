
function main(){
    swal( {
        title: "Hello Crush",
        content: {
            element: "input",
            attributes: {
                placeholder: "Ketik namamu",
                type: "text"
                 },
         },
        icon: "icon/ey.png",
        buttons:true,
        dangerMode: true,
        closeOnClickOutside: false,
      })
      .then((value) => {
        if(value){
        response(value);
      }
      else if(value===''){
        response(value);
      }
      else if(value !== ''){
          swal.close();
        }
      });
}

 function response(value){
    if(value !== ''){
        swal({
            text: "haiii " + value,
            buttons: ["Ulang namanya salah", "Lanjut"],
            icon: "icon/hello.png",
            closeOnClickOutside: false,
          })
          .then((willDelete) => {
            if (willDelete) {
                swal({
                    text: "aku cuma mau ngomong...",
                    buttons: ["Apaansi, Males!", "Lanjut"],
                    icon: "icon/introvert.png",
                    closeOnClickOutside: false,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        swal({
                            text: "i love youu",
                            buttons: ["Yek, Apaansi!", "Lanjut"],
                            icon: "icon/heart.png",
                            closeOnClickOutside: false,
                          })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal({
                                    title: "Tapi boong",
                                    buttons: ["Dih, Apaansi!", "Lanjut"],
                                    text: "Eh jangan ngambek coba pencet lanjut!",
                                    icon: "icon/tongue-out.png",
                                    closeOnClickOutside: false,
                                  })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        swal({
                                            title: "Gajadi boong deh",
                                            buttons: ["Dih, Apaansi!", "Lanjut"],
                                            text: "Eits, beneran boong dehh hahah. Eh jangan ngambek dulu coba pencet lanjut!",
                                            icon: "icon/haha.png",
                                            closeOnClickOutside: false,
                                          })
                                        .then((willDelete) => {
                                            if (willDelete) {
                                                swal({
                                                    title:"Kamu sayang aku nggak?",
                                                    buttons: ["Yek,nggak!", "Sayangg dong"],
                                                    icon: "icon/mark.png",
                                                    closeOnClickOutside: false,
                                                  })
                                                .then((willDelete) => {
                                                    if (willDelete) {
                                                        swal({
                                                            title:"Aku jugaa sayang kamuu!!",
                                                            buttons: "selesai",
                                                            icon: "icon/charity.png",
                                                            className: "red-bg",
                                                            closeOnClickOutside: false,
                                                          })
                                                          
                                                        
                                                    } 
                                                    else {
                                                        swal({
                                                            title: "Yauda gapapa, aku tetep sayang kamu!!",
                                                            icon: "success",
                                                            buttons: "Ok, Makasih",
                                                            closeOnClickOutside: false,
                                                            className: "spec",
                                                          })
                                                    }
                                                  });       
                                                
                                            } 
                                            else {
                                                swal({
                                                    title: "Ah gaasik lu!!",
                                                    icon: "error",
                                                    closeOnClickOutside: false,
                                                    className: "red-bg",
                                                  })
                                            }
                                          }); 
                                    } 
                                    else {
                                        swal({
                                            title: "Ah gaasik lu!!",
                                            icon: "error",
                                            closeOnClickOutside: false,
                                            className: "red-bg",
                                          })
                                    }
                                  }); 
                            } 
                            else {
                                swal({
                                    title: "Ah gaasik lu!!",
                                    icon: "error",
                                    closeOnClickOutside: false,
                                    className: "red-bg",
                                  })
                            }
                          }); 
                    } 
                    else {
                        swal({
                            title: "Ah gaasik lu!!",
                            icon: "error",
                            closeOnClickOutside: false,
                            className: "red-bg",
                          })
                    }
                  });
            } 
            else {
               main();
            }
          });
        }
        else if(value === ''){
            swal({
                title: "Gaboleh kosong ya, harus diisi!",
                icon: "warning",
                text: "Mau ulang lagi nggak?",
                buttons: ["males","ulang lagi"],
                closeOnClickOutside: false,
            })
            .then((willDelete) => {
                if (willDelete) {
                  main();
                } else {
                    swal({
                        title: "Ah gaasik lu!!",
                        icon: "error",
                        closeOnClickOutside: false,
                        className: "red-bg",
                      })
                }
              });
        }

        return value;
 };



