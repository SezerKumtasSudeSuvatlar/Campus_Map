ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32635").setExtent([501916.713633, 4262111.983170, 503546.045794, 4263304.215645]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AGAC_3 = new ol.format.GeoJSON();
var features_AGAC_3 = format_AGAC_3.readFeatures(json_AGAC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_AGAC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGAC_3.addFeatures(features_AGAC_3);
var lyr_AGAC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGAC_3, 
                style: style_AGAC_3,
                popuplayertitle: "AGAC",
                interactive: false,
                    title: '<img src="styles/legend/AGAC_3.png" /> AGAC'
                });
var format_AGAC_A_4 = new ol.format.GeoJSON();
var features_AGAC_A_4 = format_AGAC_A_4.readFeatures(json_AGAC_A_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_AGAC_A_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGAC_A_4.addFeatures(features_AGAC_A_4);
var lyr_AGAC_A_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGAC_A_4, 
                style: style_AGAC_A_4,
                popuplayertitle: "AGAC_A",
                interactive: false,
                    title: '<img src="styles/legend/AGAC_A_4.png" /> AGAC_A'
                });
var format_FOOTEN_5 = new ol.format.GeoJSON();
var features_FOOTEN_5 = format_FOOTEN_5.readFeatures(json_FOOTEN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_FOOTEN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOOTEN_5.addFeatures(features_FOOTEN_5);
var lyr_FOOTEN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOOTEN_5, 
                style: style_FOOTEN_5,
                popuplayertitle: "FOOTEN",
                interactive: true,
                    title: '<img src="styles/legend/FOOTEN_5.png" /> FOOTEN'
                });
var format_KALDIRIM_6 = new ol.format.GeoJSON();
var features_KALDIRIM_6 = format_KALDIRIM_6.readFeatures(json_KALDIRIM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_KALDIRIM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KALDIRIM_6.addFeatures(features_KALDIRIM_6);
var lyr_KALDIRIM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KALDIRIM_6, 
                style: style_KALDIRIM_6,
                popuplayertitle: "KALDIRIM",
                interactive: false,
                    title: '<img src="styles/legend/KALDIRIM_6.png" /> KALDIRIM'
                });
var format_OTOPARK_7 = new ol.format.GeoJSON();
var features_OTOPARK_7 = format_OTOPARK_7.readFeatures(json_OTOPARK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_OTOPARK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTOPARK_7.addFeatures(features_OTOPARK_7);
var lyr_OTOPARK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTOPARK_7, 
                style: style_OTOPARK_7,
                popuplayertitle: "OTOPARK",
                interactive: true,
                    title: '<img src="styles/legend/OTOPARK_7.png" /> OTOPARK'
                });
var format_REFUJ_8 = new ol.format.GeoJSON();
var features_REFUJ_8 = format_REFUJ_8.readFeatures(json_REFUJ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_REFUJ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFUJ_8.addFeatures(features_REFUJ_8);
var lyr_REFUJ_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFUJ_8, 
                style: style_REFUJ_8,
                popuplayertitle: "REFUJ",
                interactive: false,
                    title: '<img src="styles/legend/REFUJ_8.png" /> REFUJ'
                });
var format_SINIR_9 = new ol.format.GeoJSON();
var features_SINIR_9 = format_SINIR_9.readFeatures(json_SINIR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_SINIR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SINIR_9.addFeatures(features_SINIR_9);
var lyr_SINIR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SINIR_9, 
                style: style_SINIR_9,
                popuplayertitle: "SINIR",
                interactive: false,
                    title: '<img src="styles/legend/SINIR_9.png" /> SINIR'
                });
var format_YESIL_A_10 = new ol.format.GeoJSON();
var features_YESIL_A_10 = format_YESIL_A_10.readFeatures(json_YESIL_A_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_YESIL_A_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YESIL_A_10.addFeatures(features_YESIL_A_10);
var lyr_YESIL_A_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YESIL_A_10, 
                style: style_YESIL_A_10,
                popuplayertitle: "YESIL_A",
                interactive: false,
                    title: '<img src="styles/legend/YESIL_A_10.png" /> YESIL_A'
                });
var format_BANK_11 = new ol.format.GeoJSON();
var features_BANK_11 = format_BANK_11.readFeatures(json_BANK_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_BANK_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_11.addFeatures(features_BANK_11);
var lyr_BANK_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANK_11, 
                style: style_BANK_11,
                popuplayertitle: "BANK",
                interactive: true,
                    title: '<img src="styles/legend/BANK_11.png" /> BANK'
                });
var format_KAMELYA_12 = new ol.format.GeoJSON();
var features_KAMELYA_12 = format_KAMELYA_12.readFeatures(json_KAMELYA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_KAMELYA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAMELYA_12.addFeatures(features_KAMELYA_12);
var lyr_KAMELYA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAMELYA_12, 
                style: style_KAMELYA_12,
                popuplayertitle: "KAMELYA",
                interactive: false,
                    title: '<img src="styles/legend/KAMELYA_12.png" /> KAMELYA'
                });
var format_KAMELYA_A_13 = new ol.format.GeoJSON();
var features_KAMELYA_A_13 = format_KAMELYA_A_13.readFeatures(json_KAMELYA_A_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_KAMELYA_A_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAMELYA_A_13.addFeatures(features_KAMELYA_A_13);
var lyr_KAMELYA_A_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAMELYA_A_13, 
                style: style_KAMELYA_A_13,
                popuplayertitle: "KAMELYA_A",
                interactive: true,
                    title: '<img src="styles/legend/KAMELYA_A_13.png" /> KAMELYA_A'
                });
var format_HAVUZ_A_14 = new ol.format.GeoJSON();
var features_HAVUZ_A_14 = format_HAVUZ_A_14.readFeatures(json_HAVUZ_A_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_HAVUZ_A_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAVUZ_A_14.addFeatures(features_HAVUZ_A_14);
var lyr_HAVUZ_A_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAVUZ_A_14, 
                style: style_HAVUZ_A_14,
                popuplayertitle: "HAVUZ_A",
                interactive: true,
                    title: '<img src="styles/legend/HAVUZ_A_14.png" /> HAVUZ_A'
                });
var format_HAVUZ_15 = new ol.format.GeoJSON();
var features_HAVUZ_15 = format_HAVUZ_15.readFeatures(json_HAVUZ_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_HAVUZ_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAVUZ_15.addFeatures(features_HAVUZ_15);
var lyr_HAVUZ_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAVUZ_15, 
                style: style_HAVUZ_15,
                popuplayertitle: "HAVUZ",
                interactive: false,
                    title: '<img src="styles/legend/HAVUZ_15.png" /> HAVUZ'
                });
var format_BINA_A_16 = new ol.format.GeoJSON();
var features_BINA_A_16 = format_BINA_A_16.readFeatures(json_BINA_A_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_BINA_A_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINA_A_16.addFeatures(features_BINA_A_16);
var lyr_BINA_A_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINA_A_16, 
                style: style_BINA_A_16,
                popuplayertitle: "BINA_A",
                interactive: true,
                    title: '<img src="styles/legend/BINA_A_16.png" /> BINA_A'
                });
var format_BINA_17 = new ol.format.GeoJSON();
var features_BINA_17 = format_BINA_17.readFeatures(json_BINA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_BINA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINA_17.addFeatures(features_BINA_17);
var lyr_BINA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINA_17, 
                style: style_BINA_17,
                popuplayertitle: "BINA",
                interactive: false,
                    title: '<img src="styles/legend/BINA_17.png" /> BINA'
                });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_AGAC_3.setVisible(true);lyr_AGAC_A_4.setVisible(true);lyr_FOOTEN_5.setVisible(true);lyr_KALDIRIM_6.setVisible(true);lyr_OTOPARK_7.setVisible(true);lyr_REFUJ_8.setVisible(true);lyr_SINIR_9.setVisible(true);lyr_YESIL_A_10.setVisible(true);lyr_BANK_11.setVisible(true);lyr_KAMELYA_12.setVisible(true);lyr_KAMELYA_A_13.setVisible(true);lyr_HAVUZ_A_14.setVisible(true);lyr_HAVUZ_15.setVisible(true);lyr_BINA_A_16.setVisible(true);lyr_BINA_17.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleMaps_1,lyr_OSMStandard_2,lyr_AGAC_3,lyr_AGAC_A_4,lyr_FOOTEN_5,lyr_KALDIRIM_6,lyr_OTOPARK_7,lyr_REFUJ_8,lyr_SINIR_9,lyr_YESIL_A_10,lyr_BANK_11,lyr_KAMELYA_12,lyr_KAMELYA_A_13,lyr_HAVUZ_A_14,lyr_HAVUZ_15,lyr_BINA_A_16,lyr_BINA_17];
lyr_AGAC_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_AGAC_A_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_FOOTEN_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_KALDIRIM_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_OTOPARK_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_REFUJ_8.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_SINIR_9.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_YESIL_A_10.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_BANK_11.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_KAMELYA_12.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_KAMELYA_A_13.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_HAVUZ_A_14.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_HAVUZ_15.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_BINA_A_16.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBN': 'OBN', });
lyr_BINA_17.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'OBN': 'OBN', });
lyr_AGAC_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_AGAC_A_4.set('fieldImages', {'Shape_Leng': '', });
lyr_FOOTEN_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_KALDIRIM_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_OTOPARK_7.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_REFUJ_8.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_SINIR_9.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_YESIL_A_10.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_BANK_11.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_KAMELYA_12.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_KAMELYA_A_13.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_HAVUZ_A_14.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_HAVUZ_15.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_BINA_A_16.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBN': 'TextEdit', });
lyr_BINA_17.set('fieldImages', {'Shape_Leng': 'TextEdit', 'OBN': 'TextEdit', });
lyr_AGAC_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBN': 'no label', });
lyr_AGAC_A_4.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_FOOTEN_5.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_KALDIRIM_6.set('fieldLabels', {'Shape_Leng': 'no label', 'OBN': 'no label', });
lyr_OTOPARK_7.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_REFUJ_8.set('fieldLabels', {'Shape_Leng': 'no label', 'OBN': 'no label', });
lyr_SINIR_9.set('fieldLabels', {'Shape_Leng': 'no label', 'OBN': 'no label', });
lyr_YESIL_A_10.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'no label', });
lyr_BANK_11.set('fieldLabels', {'Shape_Leng': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_KAMELYA_12.set('fieldLabels', {'Shape_Leng': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_KAMELYA_A_13.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_HAVUZ_A_14.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_HAVUZ_15.set('fieldLabels', {'Shape_Leng': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_BINA_A_16.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBN': 'header label - visible with data', });
lyr_BINA_17.set('fieldLabels', {'Shape_Leng': 'hidden field', 'OBN': 'hidden field', });
lyr_BINA_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});