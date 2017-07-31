# Salesforce Lightning Component - ESignature

The E-Signature lightning component enables the salesforce developers to add e-sinature feature on their web/salesforce1 mobile application. It generates the image data URL string so that you can either save it into the database as one of the table field or save it as PNG file. It also to show the signaure in Read only mode.

##How to install ESignature Component
[Unmanaged package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6A00000149od)
## How to use the ESignature Component

### Step1: add the below html into your container component
```HTML
<c:ESignature aura:id="signature" minWidth="0.5" maxWidth="1.5" penColor="rgb(0,0,255)"/>
```

#### attribute definitions
```
minWidth (double): minimum width of a line
maxWidth (double): maximum width of a line
penColor (string): pen color, can be 'red', 'blue' or rgb(0,0,0) etc;
```
#### Pen dotSize = (minWidth + maxWidth) / 2;


### Step2: in your container component, you have save button to save the signature into the backend storage. here is the sample code when the save button is clicked.

```javascript
onSave: function(component, event){
  var pngDataStringUrl, signature = component.find('signature');
  signature.capture();
  pngDataStringUrl = signagure.get('v.signatureData');
  //call backend API to save the pngDataStringURL
}
```

## How to show readonly esignature
sometime you want to show saved signature on the page. The ESignature has ReadOnly mode so that it show the saved signature.

### Step1: copy the below html snnipet to your container component
```HTML
<c:ESignature aura:id="signature" readOnly="true"/>
```

### Step2: assumed that on init event, you call Web API to get the saved signature png datastring url, you can set attribute as show below:

```Javascript
  onInit: function(component, event){
    var signature = component.find('signature');
    var dataStringUrl = '....you get from web api call';
    signature.set('v.signatureData', dataStringUrl);
  }
```


## We are using the following opensource framework
[Signature Pad](https://github.com/szimek/signature_pad)

### We augment this signature pad library to add compressing capability to shake down the size of the generated signature so that you don't need another library to shrink the size.

## The Demo Image from salesforce1 mobile simulator

![GitHub Logo](/images/esignature-screenshot.png)