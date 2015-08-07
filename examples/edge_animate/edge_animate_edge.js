/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"test_data.js",
            "https://live-ssl.cdn.spongecell.com/studio/api/v1/spongeapi.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
                        },
                        {
                            id: 'frame1',
                            type: 'image',
                            rect: ['103px', '74px', '127px', '107px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spongecell.png",'0px','0px'],
                            userClass: "image1"
                        },
                        {
                            id: 'headline',
                            type: 'text',
                            rect: ['8px', '26px', '285px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">This is Animate</p>",
                            align: "center",
                            userClass: "headline1",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,250,215,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'copy',
                            type: 'text',
                            rect: ['8px', '71px', '285px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: left;\">Body copy</p>",
                            align: "left",
                            userClass: "headline1",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,250,215,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'legal',
                            type: 'text',
                            rect: ['8px', '222px', '285px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 8px;\">legal</span></p>",
                            align: "left",
                            userClass: "headline1",
                            font: ['Arial, Helvetica, sans-serif', [8, "px"], "rgba(255,250,215,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'CTA',
                            symbolName: 'CTA',
                            type: 'rect',
                            rect: ['16', '142', '87', '28', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "height",
                            443,
                            1406,
                            "linear",
                            "${frame1}",
                            '107px',
                            '167px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            443,
                            1406,
                            "linear",
                            "${frame1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "width",
                            443,
                            1406,
                            "linear",
                            "${frame1}",
                            '127px',
                            '198px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            2997,
                            "linear",
                            "${headline}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            4500,
                            0,
                            "linear",
                            "${headline}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid29",
                            "left",
                            1849,
                            0,
                            "linear",
                            "${frame1}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid27",
                            "top",
                            443,
                            1406,
                            "linear",
                            "${frame1}",
                            '141px',
                            '74px'
                        ]
                    ]
                }
            },
            "CTA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '87px', '28px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​CTA</p>',
                            rect: ['27px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '87px', '28px', 'auto', 'auto'],
                            opacity: '0.01',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_animate_edgeActions.js");
})("EDGE-45551221");
