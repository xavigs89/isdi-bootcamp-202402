import utils from '../../utils.mjs'

import logic from '../../logic.mjs'

import Image from '../../core/Image.mjs'
import Component from '../../core/Component.mjs'

class Post extends Component {
    constructor(post) {
        super('article')

        const author = new Component('h3')
        author.setText(post.author.username)

        const picture = new Image
        picture.setSource(post.image)

        const paragraph = new Component('p')
        paragraph.setText(post.text)

        const dateTime = new Component('time')
        dateTime.setText(post.date)

        this.add(author, picture, paragraph, dateTime)

        if (post.author.id === logic.getLoggedInUserId()) {
            const deleteButton = new Component('button')
            deleteButton.setText('🗑️')

            deleteButton.onClick(function () {
                if (confirm('delete post?'))
                    try {
                        logic.removePost(post.id)

                        // TODO renderPosts() ?
                    } catch (error) {
                        utils.showFeedback(error)
                    }
            })

            const editButton = new Component('button')
            editButton.setText('📝')

            editButton.onClick(() => {
                // TODO open edit panel
            })

            this.add(deleteButton, editButton)
        }
    }
}

export default Post