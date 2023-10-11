import * as Localize from './Localize';
import themeColors from '../styles/themes/default';
import * as Session from './actions/Session';
import * as Report from './actions/Report';
import * as Expensicons from '../components/Icon/Expensicons';

/**
 * @param {Object} report
 * @returns {Object}
 */
function getPinFunctionality(report) {
    if (!report.isPinned) {
        return {
            icon: Expensicons.Pin,
            iconFill: themeColors.icon,
            text: Localize.translateLocal('common.pin'),
            onSelected: Session.checkIfActionIsAllowed(() => Report.togglePinnedState(report.reportID, report.isPinned)),
        };
    }
    return {
        icon: Expensicons.Pin,
        iconFill: themeColors.icon,
        text: Localize.translateLocal('common.unPin'),
        onSelected: Session.checkIfActionIsAllowed(() => Report.togglePinnedState(report.reportID, report.isPinned)),
    };
}

export default getPinFunctionality;
