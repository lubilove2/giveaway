import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [
            {
                name: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/giveaway.jpg"
            },
            {
                name: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/giveaway.jpg"
            },
            {
                name: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/giveaway.jpg"
            },
            {
                name: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/giveaway.jpg"
            },
            {
                name: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/giveaway.jpg"
            }
          ]
        }
    }

    render() {
    	const { members } = this.state
        return (
            <div className="member-list">
                <h1>Items Ready For Donation</h1>
                {members.map(
                	(data, i) =>
                		<Member key={i}
                				onClick={email => console.log(email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default MemberList
