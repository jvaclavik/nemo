declare module "sreality-client" {
  function fetchHouses(page:number, pageSize:number, regionType:string, regionId:number): any; 
  export = {
    fetchHouses
  };
}
// declare module "react-mapycz" {
//   function fetchHouses(page:number, pageSize:number, regionType:string, regionId:number): any; 
//   export = {
//     Map:any
//   };
// }
// export {}
// declare global {
//   interface Window {
//     SMap: any;
//   }
// }