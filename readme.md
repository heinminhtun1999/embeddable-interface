## **Sample API for Embeddable Interface**

This sample API demonstrates how the ARVgo Server and JingPin Server can interact to provide an embeddable interface.

### **Starting Server**
- `cd API Server`
- `npm install` 
- `npm start`

**Prerequisites:**
To run the demo, you need the following installed on your system:
1. **Node.js**: [Download Node.js](https://nodejs.org/)
2. **npm**: Comes bundled with Node.js.


### **API**

**Get Menu**

**API Name**: Get Menu  
**API URL**: `https://embeddable-interface-test-243e558348f9.herokuapp.com/getMenuURL`  
**Method**: `POST ` 

**Purpose**:  
This API generates a URL based on the provided machine_id. The generated URL can be embedded into an HTML document to display a shopping menu interface. It serves as a validation mechanism to ensure the machine ID corresponds to the appropriate menu.

**Request Example**:  
{    
"machine_id": 1     
}

**Response**:  
interfaceURL: A URL that can be embedded into an HTML document to render the menu.

**Example Response**:   
{  
  "interfaceURL": "https://embeddable-interface-test243e558348f9.herokuapp.com/menu?machine_id=1"    
}   

Note:  
 - The client application is only responsible for embedding this interface.
 -  machine_id is just for demonstration purposes. Developers should adjust the parameters to include additional security checks or authorization mechanisms.



**Demo**:  
[Embeddable Interface Demo](https://heinminhtun1999.github.io/embeddable-interface/)
