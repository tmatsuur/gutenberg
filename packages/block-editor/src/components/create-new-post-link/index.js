/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';

const CreateNewPostLink = ( { clientId } ) => {
	const postType = useSelect( ( select ) => {
		const { getBlockAttributes } = select( blockEditorStore );
		return getBlockAttributes( clientId )?.query?.postType;
	} );

	if ( ! postType ) return null;
	const newPostUrl = addQueryArgs( 'post-new.php', {
		post_type: postType,
	} );

	return (
		<div className="wp-block-query__create-new-link">
			{ createInterpolateElement(
				__( '<a>Add new post</a>' ),
				// eslint-disable-next-line jsx-a11y/anchor-has-content
				{ a: <a href={ newPostUrl } /> }
			) }
		</div>
	);
};

export default CreateNewPostLink;
