// TooltipLabel.jsx
// This component is a simple tooltip label that can be used in various parts of the application.
// This component displays a label with a tooltip.
// The label is underlined with a dotted line and changes the cursor to a help icon on hover.
// It is useful for providing additional information about a label without cluttering the UI.   
// The tooltip text is displayed when the user hovers over the label.
// It uses the title attribute to show the tooltip, which is a simple and effective way to provide additional context.
// The component is styled to look like a link with a dotted underline, indicating that it is interactive.
// The tooltip text is passed as a prop, allowing for flexibility in what information is displayed.

const TooltipLabel = ({ label, tooltip }) => (
  <span title={tooltip} style={{ textDecoration: 'dotted underline', cursor: 'help' }}>
    {label}
  </span>
);
import PropTypes from 'prop-types';

TooltipLabel.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired
};
export default TooltipLabel;