import {
    IDockviewComponent,
    SerializedDockview,
} from '../dockview/dockviewComponent';
import {
    AddGroupOptions,
    AddPanelOptions,
    MovementOptions,
} from '../dockview/options';
import { Direction } from '../gridview/baseComponentGridview';
import {
    AddComponentOptions,
    IGridviewComponent,
    SerializedGridview,
} from '../gridview/gridviewComponent';
import { IGridviewPanel } from '../gridview/gridviewPanel';
import { IGroupPanel } from '../groupview/groupPanel';
import {
    AddPaneviewCompponentOptions,
    SerializedPaneview,
    IPaneviewComponent,
} from '../paneview/paneviewComponent';
import { IPaneviewPanel } from '../paneview/paneviewPanel';
import {
    AddSplitviewComponentOptions,
    ISplitviewComponent,
    SerializedSplitview,
    SplitviewComponentUpdateOptions,
} from '../splitview/splitviewComponent';
import { Orientation, Sizing } from '../splitview/core/splitview';
import { ISplitviewPanel } from '../splitview/splitviewPanel';
import { GroupviewPanel } from '../groupview/groupviewPanel';
import { Event } from '../events';

export interface CommonApi {
    readonly onDidLayoutChange: Event<void>;
}

export class SplitviewApi implements CommonApi {
    get minimumSize() {
        return this.component.minimumSize;
    }

    get maximumSize() {
        return this.component.maximumSize;
    }

    get height() {
        return this.component.height;
    }

    get width() {
        return this.component.width;
    }

    get length() {
        return this.component.length;
    }

    get onDidLayoutChange() {
        return this.component.onDidLayoutChange;
    }

    get orientation(): Orientation {
        return this.component.orientation;
    }

    constructor(private readonly component: ISplitviewComponent) {}

    updateOptions(options: SplitviewComponentUpdateOptions): void {
        this.component.updateOptions(options);
    }

    removePanel(panel: ISplitviewPanel, sizing?: Sizing) {
        this.component.removePanel(panel, sizing);
    }

    setVisible(panel: ISplitviewPanel, isVisible: boolean) {
        return this.component.setVisible(panel, isVisible);
    }

    getPanels(): ISplitviewPanel[] {
        return this.component.getPanels();
    }

    focus() {
        return this.component.focus();
    }

    getPanel(id: string) {
        return this.component.getPanel(id);
    }

    setActive(panel: ISplitviewPanel) {
        return this.component.setActive(panel);
    }

    layout(width: number, height: number) {
        return this.component.layout(width, height);
    }

    addPanel(options: AddSplitviewComponentOptions) {
        return this.component.addPanel(options);
    }

    resizeToFit() {
        return this.component.resizeToFit();
    }

    movePanel(from: number, to: number) {
        this.component.movePanel(from, to);
    }

    fromJSON(data: SerializedSplitview, deferComponentLayout?: boolean) {
        return this.component.fromJSON(data, deferComponentLayout);
    }

    toJSON() {
        return this.component.toJSON();
    }
}

export class PaneviewApi implements CommonApi {
    get width() {
        return this.component.width;
    }

    get height() {
        return this.component.height;
    }

    get minimumSize() {
        return this.component.minimumSize;
    }

    get maximumSize() {
        return this.component.maximumSize;
    }

    get onDidLayoutChange() {
        return this.component.onDidLayoutChange;
    }

    constructor(private readonly component: IPaneviewComponent) {}

    getPanels(): IPaneviewPanel[] {
        return this.component.getPanels();
    }

    removePanel(panel: IPaneviewPanel): void {
        this.component.removePanel(panel);
    }

    getPanel(id: string): IPaneviewPanel | undefined {
        return this.component.getPanel(id);
    }

    movePanel(from: number, to: number) {
        this.component.movePanel(from, to);
    }

    focus() {
        return this.component.focus();
    }

    layout(width: number, height: number) {
        return this.component.layout(width, height);
    }

    addPanel(options: AddPaneviewCompponentOptions) {
        return this.component.addPanel(options);
    }

    resizeToFit() {
        return this.component.resizeToFit();
    }

    fromJSON(data: SerializedPaneview, deferComponentLayout?: boolean) {
        return this.component.fromJSON(data, deferComponentLayout);
    }

    toJSON() {
        return this.component.toJSON();
    }
}

export class GridviewApi implements CommonApi {
    get width() {
        return this.component.width;
    }

    get height() {
        return this.component.height;
    }

    get minimumHeight() {
        return this.component.minimumHeight;
    }

    get maximumHeight() {
        return this.component.maximumHeight;
    }

    get minimumWidth() {
        return this.component.minimumWidth;
    }

    get maximumWidth() {
        return this.component.maximumWidth;
    }

    get onGridEvent() {
        return this.component.onGridEvent;
    }

    get onDidLayoutChange() {
        return this.component.onDidLayoutChange;
    }

    get panels() {
        return this.component.groups;
    }

    constructor(private readonly component: IGridviewComponent) {}

    get orientation() {
        return this.component.orientation;
    }

    set orientation(value: Orientation) {
        this.component.updateOptions({ orientation: value });
    }

    focus() {
        return this.component.focus();
    }

    layout(width: number, height: number, force = false) {
        return this.component.layout(width, height, force);
    }

    addPanel(options: AddComponentOptions) {
        return this.component.addPanel(options);
    }

    removePanel(panel: IGridviewPanel, sizing?: Sizing): void {
        this.component.removePanel(panel, sizing);
    }

    movePanel(
        panel: IGridviewPanel,
        options: { direction: Direction; reference: string; size?: number }
    ) {
        this.component.movePanel(panel, options);
    }

    resizeToFit() {
        return this.component.resizeToFit();
    }

    getPanel(id: string) {
        return this.component.getPanel(id);
    }

    toggleVisibility(panel: IGridviewPanel) {
        return this.component.toggleVisibility(panel);
    }

    // isVisible(panel: IGridviewPanel) {
    //     return this.component.isVisible(panel);
    // }

    setVisible(panel: IGridviewPanel, visible: boolean) {
        return this.component.setVisible(panel, visible);
    }

    setActive(panel: IGridviewPanel): void {
        this.component.setActive(panel);
    }

    fromJSON(data: SerializedGridview, deferComponentLayout?: boolean) {
        return this.component.fromJSON(data, deferComponentLayout);
    }

    toJSON() {
        return this.component.toJSON();
    }
}

export class DockviewApi implements CommonApi {
    get width() {
        return this.component.width;
    }

    get height() {
        return this.component.height;
    }

    get minimumHeight() {
        return this.component.minimumHeight;
    }

    get maximumHeight() {
        return this.component.maximumHeight;
    }

    get minimumWidth() {
        return this.component.minimumWidth;
    }

    get maximumWidth() {
        return this.component.maximumWidth;
    }

    get size() {
        return this.component.size;
    }

    get totalPanels() {
        return this.component.totalPanels;
    }

    get onGridEvent() {
        return this.component.onGridEvent;
    }

    get onDidLayoutChange() {
        return this.component.onDidLayoutChange;
    }

    get panels() {
        return this.component.panels;
    }

    get groups() {
        return this.component.groups;
    }

    constructor(private readonly component: IDockviewComponent) {}

    focus() {
        return this.component.focus();
    }

    getPanel(id: string): IGroupPanel | undefined {
        return this.component.getGroupPanel(id);
    }

    setActivePanel(panel: IGroupPanel) {
        return this.component.setActivePanel(panel);
    }

    layout(width: number, height: number, force = false) {
        return this.component.layout(width, height, force);
    }

    addPanel(options: AddPanelOptions) {
        return this.component.addPanel(options);
    }

    // addDndHandle(type: string, cb: (event: LayoutDropEvent) => PanelOptions) {
    //     return this.component.addDndHandle(type, cb);
    // }

    // createDragTarget(
    //     target: {
    //         element: HTMLElement;
    //         content: string;
    //     },
    //     options: (() => PanelOptions) | PanelOptions
    // ) {
    //     return this.component.createDragTarget(target, options);
    // }

    addEmptyGroup(options?: AddGroupOptions) {
        return this.component.addEmptyGroup(options);
    }

    moveToNext(options?: MovementOptions) {
        return this.component.moveToNext(options);
    }

    moveToPrevious(options?: MovementOptions) {
        return this.component.moveToPrevious(options);
    }

    closeAllGroups() {
        return this.component.closeAllGroups();
    }

    removeGroup(group: GroupviewPanel) {
        return this.component.removeGroup(group);
    }

    resizeToFit() {
        return this.component.resizeToFit();
    }

    getTabHeight() {
        return this.component.tabHeight;
    }

    setTabHeight(height: number | undefined) {
        this.component.tabHeight = height;
    }

    getGroup(id: string) {
        return this.component.getPanel(id);
    }

    fromJSON(data: SerializedDockview) {
        return this.component.fromJSON(data);
    }

    toJSON() {
        return this.component.toJSON();
    }
}
