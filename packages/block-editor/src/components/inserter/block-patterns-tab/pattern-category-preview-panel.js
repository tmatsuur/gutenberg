/**
 * WordPress dependencies
 */
import { useRef, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { PatternCategoryPreviews } from './pattern-category-previews';
import { store as blockEditorStore } from '../../../store';
import { unlock } from '../../../lock-unlock';

export function PatternCategoryPreviewPanel( {
	rootClientId,
	onInsert,
	onHover,
	category,
	showTitlesAsTooltip,
	patternFilter,
} ) {
	const { __unstableGetEditorMode } = useSelect( blockEditorStore );

	const { isZoomOutLevelBlockSelected, mode } = useSelect( ( select ) => {
		const { getSettings, getBlockOrder, getSelectedBlockClientId } =
			select( blockEditorStore );

		const { sectionRootClientId: root } = unlock( getSettings() );

		const selectedBlockClientId = getSelectedBlockClientId();

		return {
			mode: __unstableGetEditorMode(),
			isZoomOutLevelBlockSelected:
				! selectedBlockClientId ||
				root === selectedBlockClientId ||
				getBlockOrder( root ).includes( selectedBlockClientId ),
		};
	}, [] );

	const { __unstableSetEditorMode } = useDispatch( blockEditorStore );

	const toggledToZoomOutFrom = useRef( mode );

	useEffect( () => {
		// We only want to do this when _opening or closing_ the preview panel.
		if ( mode !== 'zoom-out' && isZoomOutLevelBlockSelected ) {
			__unstableSetEditorMode( 'zoom-out' );
		}

		return () => {
			// We need to use  __unstableGetEditorMode() here and not `mode`, as mode may not update on unmount
			if (
				__unstableGetEditorMode() === 'zoom-out' &&
				!! toggledToZoomOutFrom.current
			) {
				__unstableSetEditorMode( toggledToZoomOutFrom.current );
			}
		};
	}, [] );

	return (
		<PatternCategoryPreviews
			key={ category.name }
			rootClientId={ rootClientId }
			onInsert={ onInsert }
			onHover={ onHover }
			category={ category }
			showTitlesAsTooltip={ showTitlesAsTooltip }
			patternFilter={ patternFilter }
		/>
	);
}
