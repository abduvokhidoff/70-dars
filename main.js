// Get => ovolish

// Post => jonatish backga

// Put => edit ozgartirib beradi

// Delete => objni ochirib beradi


// fetch('https://dummyjson.com/carts/1')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.products);
//         ReadFunction(data.products)
//     });

// let wrapper = document.querySelector('.wrapper');

// const ReadFunction = (products) => {
//     products.map((v) => {
//         let div = document.createElement('div');
//         div.classList.add('flex', 'flex-col', 'gap-[10px]', 'rounded-[20px]', 'bg-[grey]', 'py-[10px]')
//         div.innerHTML = `
//         <div class="flex items-center justify-center">
//             <img src="${v.thumbnail}" alt="">
//         </div>
//         <div class="flex flex-col gap-[10px] px-[20px]">
//             <div class="flex items-center justify-start">
//                 <p>${v.title}</p>
//             </div>    
//             <div class="flex items-center justify-start">
//                 <p>${v.total}</p>
//             </div> 
//             <div class="flex items-center justify-end">
//                 <button class="rounded-[10px] bg-[red] px-[10px] py-[5px]">
//                     <p>${v.price}</p>
//                 </button>
//             </div> 
//         </div>
//         `;
//         wrapper.appendChild(div);
//     });
// };

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(baza => {
        console.log(baza.products);
        ReadFunction(baza);
    });



let wrapper = document.querySelector('.wrapper')

const ReadFunction = (baza) => {
    baza.products.map((v) => {
        let div = document.createElement('div')
        div.classList.add('flex', 'flex-col', 'gap-[20px]', 'rounded-[20px]', 'shadow-lg', 'bg-[#f0f3f8]', 'w-[350px]', 'justify-between', 'h-[550px]', 'py-[20px]')
        div.innerHTML = 
        `
        <div class="flex items-center justify-center">
            <img class="w-[350px] h-[300px]" src="${v.images[0]}" alt="">
        </div>
        <div class="flex flex-col gap-[10px]">
            <div class="flex items-center justify-end px-[10px]">
                <p class="font-[Roboto] font-[600] text-[17px] text-[#3b5998]">${v.brand}</p>
            </div>
             <div class="flex items-center justify-center px-[10px]">
                <p class="font-[Roboto] font-[500] text-[14px] text-[#3a3a3a] text-center">${v.description}</p>
            </div>
            <div class="flex items-center justify-between px-[10px]">
                <button class="flex items-center justify-center rounded-[10px] border-none outline-none bg-[red] px-[10px] py-[5px] active:bg-[black]">
                    <p class="font-[Roboto] font-[500] text-[14px] text-[#ffffff]">${v.price}$</p>
                </button>
                <div class="flex items-center justify-center gap-[5px]">
                    <img class="w-[15px] h-[15px]" src="https://www.pngplay.com/wp-content/uploads/8/Gold-Vector-Star-Download-Free-PNG.png" alt="">
                    <p class="font-[Roboto] font-[500] text-[14px] text-[#FFD700]">${v.rating}</p>
                </div>
            </div>
        </div>
        `
        wrapper.appendChild(div)
    })
}

ReadFunction()
