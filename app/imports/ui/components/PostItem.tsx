import * as React from 'react';

interface PostProps {name: string, deliveryStatus: string, destination: string
}

interface PostState {
}

export class PostItemComponent extends React.Component<PostProps, PostState> {

    constructor(props:PostProps){

    }

    render() {
        return<div className="ui card">
            <div className="image">
                <img src="/images/avatar2/large/kristy.png"/>
            </div>
            <div className="content">
                <a className="header">{this.props.name}</a>
                <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    {this.props.destination}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    <p>{this.props.deliveryStatus}</p>

                </a>
            </div>
        </div>

    }
}

//style="border:1px solid black;"
