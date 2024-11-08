// Import the Media higher-order component (HOC)
import { Media as MediaHOC } from './media';

// Import individual media components
import { ButtonMedia } from './buttonMedia';
import { ContentMedia } from './contentMedia';
import { InputMedia } from './inputMedia';
import { ResultMedia } from './resultMedia';

// Export individual media components
export { ButtonMedia } from './buttonMedia';
export { ContentMedia } from './contentMedia';
export { InputMedia } from './inputMedia';
export { ResultMedia } from './resultMedia';

// Combine the Media HOC with individual media components into a single object
const Media = Object.assign(MediaHOC, {
    ButtonMedia,
    ContentMedia,
    InputMedia,
    ResultMedia,
});

export default Media;
