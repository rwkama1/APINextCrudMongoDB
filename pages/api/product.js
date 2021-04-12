import { Component } from "react";
import cors from "./cors";
import {DataProduct} from "crudmongodb/dist/dataproduct";
import { DTProduct } from "crudmongodb/dist/product";
export default async function (req, res) {
    if(req.method==="GET")
    {
     await cors(req, res)
      const list=await DataProduct.getInstance().getProducts();
      return res.send(list);
    }
    if(req.method==="POST")
    {
      await cors(req, res)
      try
      {
      const data = req.body;
      var dtproduct=new DTProduct(0, data.name,data.price);
      
      const addproduct=await DataProduct.getInstance().addProduct(dtproduct);
      return res.status(200).send("Success");   
      }
      catch (error) {
        return res.status(500).send("Could not add Product: "+error.message);    
        
      }
    }
     if(req.method==="PUT")
        {
        await cors(req, res)
        try
        {
        const data = req.body;
        var dtproduct=new DTProduct(0, data.name,data.price);
        const updprod=await DataProduct.getInstance().updateProduct(dtproduct);
        return res.status(200).send("Success");   
    }
    catch (error) {
      return res.status(500).send("Could not UPDATE Product: "+error.message);    
      
    }   
}
if(req.method==="DELETE")
{
    await cors(req, res);
    const data = req.body;
    try
    {

    var dtproduct=new DTProduct(0, data.name,0);
    const deletep=await DataProduct.getInstance().deleteProduct(dtproduct);
    return res.status(200).send("Success");   
}
catch (error) {
  return res.status(500).send("Could not DELETE Product: "+error.message);    
  
}   
}

}

