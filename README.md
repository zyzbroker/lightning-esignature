# Salesforce Lightning Component - ESignature

The E-Signature lightning component enables the salesforce developers to add e-sinature feature on their web/salesforce1 mobile application. It generates the image data URL string so that you can either save it into the database as one of the table field or save it as PNG file. It also to show the signaure in Read only mode.

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


### Step2: in your container component, you have save button to save the signature into the backend storage. here is the sample code when the save button is clicked.

```javascript
onSave: function(component, event){
  var pngDataStringUrl, signature = component.find('signature');
  signature.capture();
  pngDataStringUrl = signagure.get('');
  //call backend API to save the pngDataStringURL
}
```

## We are using the following opensource framework

[Signature Pad](https://github.com/szimek/signature_pad)


## The Demo Image from salesforce1 mobile simulator

![GitHub Logo](/images/esignature-screenshot.png)