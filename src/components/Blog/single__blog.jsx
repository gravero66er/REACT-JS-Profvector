import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

export default class SingleBlog extends Component {
    constructor() {
        super()
        this.state = {
            SingleBlog: [],
            BlogImage: ''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:1337/blogs/${this.props.match.params.postid}`).then((res) => {
            if (res.status >= 400) {
                throw new Error('Bad Response From Server');
            }
            return res.json()
        }).then((blog) => {
            this.setState({ SingleBlog: blog });
            this.setState({ BlogMedia: blog.image });
        })
    }

    render() {
        const { id, title, content } = this.state.SingleBlog
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {content}
                </div>
                <div>
                    <img src={`http://localhost:1337${this.state.BlogMedia}`} alt="" />
                </div>
            </div>
        )
    }
}
