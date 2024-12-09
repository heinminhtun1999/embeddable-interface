## **Sample API for Embeddable Interface**

### **Starting Server**
- `npm install` 
- `npm start`

### **APIs**

**Get Menu**

**API Name**: Get Menu  
**API URL**: serverURL/getMenu  
**Method**: GET  

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
