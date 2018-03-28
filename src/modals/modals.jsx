import React from "react";
import PureModal from 'react-pure-modal';
import {render} from "react-dom";
import 'react-pure-modal/dist/react-pure-modal.min.css';

class Modals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="button" onClick={() => this.modal.open()}>Open simple modal</button>
          <PureModal
            header="Open simple modal"
            footer={(
              <button className="button" onClick={() => this.modalCenter.open()}>Open small modal on center scrollable or not</button>
            )}
            width="800px"
            scrollable={false}
            ref={(k) => this.modal = k}
          >
            <PureModal
              header="Inner"
              footer={(
                <button className="button" onClick={() => this.modalInnerScroll.open()}>Open modal with inner scroll</button>
              )}
              width="400px"
              ref={(k) => this.modalCenter = k}
            >
              <PureModal
                header="Inner2"
                footer="Buttons?"
                width="800px"
                scrollable={false}
                ref={(k) => this.modalInnerScroll = k}
              >
                <p>Lorem ipsum dolor sit ametet elit maximus, vel euismod erat lacinia. Morbi ut risus eget nunc feugiat cursus.</p>
              </PureModal>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla ex a feugiat blandit. Sed tempor placerat dui et hendrerit. Nunc fringilla vel orci at lacinia. Duis vitae nulla sit amet justo faucibus ornare. Nunc nec lacinia dolor. Vestibulum egestas condimentum ante, id semper sem facilisis eu. Sed aliquam eget est eget finibus. Quisque vehicula massa et elit maximus, vel euismod erat lacinia. Morbi ut risus eget nunc feugiat cursus.</p>
           </PureModal>
            <p>Ut bibendum dolor a mi ultrices venenatis ac a mi. Sed imperdiet ipsum sodales odio scelerisque, vel lobortis est rutrum. Sed sagittis iaculis lorem id mattis. Sed ultricies condimentum rhoncus. Phasellus rhoncus turpis nec odio egestas, quis pellentesque quam aliquam. In sodales erat iaculis libero molestie, vel commodo nisl congue. Maecenas scelerisque, ligula et elementum sagittis, felis dui semper tortor, eget euismod enim enim vitae ante. Nullam suscipit accumsan mi non blandit. Curabitur viverra risus sed feugiat aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ipsum diam, pulvinar sit amet lectus at, congue vulputate eros. Donec id libero quam.</p>
            <p>Ut bibendum dolor a mi ultrices venenatis ac a mi. Sed imperdiet ipsum sodales odio scelerisque, vel lobortis est rutrum. Sed sagittis iaculis lorem id mattis. Sed ultricies condimentum rhoncus. Phasellus rhoncus turpis nec odio egestas, quis pellentesque quam aliquam. In sodales erat iaculis libero molestie, vel commodo nisl congue. Maecenas scelerisque, ligula et elementum sagittis, felis dui semper tortor, eget euismod enim enim vitae ante. Nullam suscipit accumsan mi non blandit. Curabitur viverra risus sed feugiat aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ipsum diam, pulvinar sit amet lectus at, congue vulputate eros. Donec id libero quam.</p>
          </PureModal>
      </React.Fragment>
    )
  }
}

export default Modals;