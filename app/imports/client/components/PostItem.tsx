import * as React from 'react';

interface PostProps {name:string, deliveryStatus:string};
interface PostState {};

export class PostItem extends React.Component<PostProps, PostState>{
  render(){
    return <div>
    <br/>
    this.props.name
    this.props.deliveryStatus
    <br/>
    </div>
  }
}

//style="border:1px solid black;"
