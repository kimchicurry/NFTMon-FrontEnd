import React, { useState } from 'react'

const Breed = () => {
   const [nft1, setnft1] = useState({});
   const [nft2, setnft2] = useState({});

   const pokemons = [
     {
       name: "Charmander",
       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
     },
     {
       name: "Squirtle",
       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
     },
   ];

   function handleOnDragStart(e, selectedNFT) {
     e.dataTransfer.setData("nft1", JSON.stringify(selectedNFT));
     e.dataTransfer.setData("nft2", JSON.stringify(selectedNFT));
   }

   function handleOnDropNFT1(e) {
     const nft1 = JSON.parse(e.dataTransfer.getData("nft1"));

     setnft1(nft1);
   }

   function handleOnDropNFT2(e) {
     const nft2 = JSON.parse(e.dataTransfer.getData("nft2"));

     setnft2(nft2);
   }

   function handleDragOver(e) {
     e.preventDefault();
   }

   return (
     <div className="App">
       <div className="flex justify-center">
         {pokemons.map((pokemon, index) => (
           <div
             key={index}
             className="flex flex-col p-5 border-2"
             draggable
             onDragStart={(e) => handleOnDragStart(e, pokemon)}
           >
             <p className="font-bold text-2xl">{pokemon.name}</p>
             <img height={200} width={200} src={pokemon.img} />
           </div>
         ))}
       </div>

       <div className="flex justify-center gapx-10">
         <div
           onDrop={handleOnDropNFT1}
           onDragOver={handleDragOver}
           className="border h-[400px] w-[300px]"
         >
           <p className="font-bold text-2xl">NFT parent 1</p>
           {nft1.name && (
             <div className="flex flex-col p-5 border-2">
               <p className="font-bold text-2xl">{nft1.name}</p>
               <img height={200} width={200} src={nft1.img} />
             </div>
           )}
         </div>

         <div>Merge</div>

         <div
           onDrop={handleOnDropNFT2}
           onDragOver={handleDragOver}
           className="border h-[400px] w-[300px]"
         >
           <p className="font-bold text-2xl">NFT parent 2</p>
           {nft2.name && (
             <div className="flex flex-col p-5 border-2">
               <p className="font-bold text-2xl">{nft2.name}</p>
               <img height={200} width={200} src={nft2.img} />
             </div>
           )}
         </div>
       </div>
     </div>
   );
}

export default Breed