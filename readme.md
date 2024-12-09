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
**API URL**: `https://embeddable-interface-test-243e558348f9.herokuapp.com/getMenu`  
**Method**: `POST ` 

**Purpose**:  
The Get Menu API generates an embeddable HTML document interface for shopping menu, which can be directly integrated into web pages and applications, allowing consumers to select the items.

**Request Example**:  
{    
"machine_id": 1     
}

**Response**:  
The Get Shopping Menu API return the embeddable HTML document interface using `<iframe>`.

**Example Response**:   
`<iframe src="http://127.0.0.1:3000/embed.js?machine_id=1" width="600" height="600"></iframe>`

The src URL will dynamically embed the menu specific to the provided machine_id.  

Note: The client application is only responsible for embedding this interface.

**Demo**:  
[Embeddable Interface Demo](https://heinminhtun1999.github.io/embeddable-interface/)
