# Modal

This is render Modal component.

## Motivation

It is use for render all elements you want in modal.

## Code Style

In this component use sass and there is not use any frameworks.

## Usage

```r
import Modal from '../modal';

const Root: React.FC = () => {
  let [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <div>
        <button type="button" onClick={() => {
          setShowModal(showModal => !showModal);
        }}>modal</button>
      </div>
      <Modal
        show={showModal}
        onClose={() => { setShowModal(showModal => !showModal); }}
        style={{ animationName: "show" }}
        content={
          <p>CSS Animations. CSS allows animation of HTML elements without using JavaScript or Flash! CSS.</p>
        } />
    </div>
```

## Props

* **content** (_Required_) <br/>
    Type: `ReactElement` <br/>
    Use put all elements you want in modal

* **show** (_Required_) <br/>
    Type: `boolean` <br/>
    Use for open and close modal

* **onClose** (_Required_) <br/>
    Type: `function` <br/>
    This method use for change show prop value to false and close the modal

* **wrapperClassName** (_Optinal_) <br/>
    Type: `string` <br/>
    Use for div wrapper

* **wrapperId** (_Optinal_) <br/>
    Type: `string` <br/>
    Use for div wrapper

* **className** (_Optinal_) <br/>
    Type: `string` <br/>
    Use for content div

* **id** (_Optinal_) <br/>
    Type: `string` <br/>
    Use for content div
    
* **style** (_Optinal_) <br/>
    Type: `string` <br/>
    Use for content div
