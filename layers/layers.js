var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEOMORPHOLOGY_1 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_1 = format_GEOMORPHOLOGY_1.readFeatures(json_GEOMORPHOLOGY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_1.addFeatures(features_GEOMORPHOLOGY_1);
var lyr_GEOMORPHOLOGY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_1, 
                style: style_GEOMORPHOLOGY_1,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_0.png" /> Denudational Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_1.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_2.png" /> Flood Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_3.png" /> Pediplain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_4.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_5.png" /> Plateau<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_6.png" /> Residual Hill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_7.png" /> Rock Exposure<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_8.png" /> Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_9.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_1_10.png" /> <br />' });
var format_Bharathapuzha_2 = new ol.format.GeoJSON();
var features_Bharathapuzha_2 = format_Bharathapuzha_2.readFeatures(json_Bharathapuzha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_2.addFeatures(features_Bharathapuzha_2);
var lyr_Bharathapuzha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_2, 
                style: style_Bharathapuzha_2,
                popuplayertitle: 'Bharathapuzha',
                interactive: true,
                title: '<img src="styles/legend/Bharathapuzha_2.png" /> Bharathapuzha'
            });
var format_Geology_3 = new ol.format.GeoJSON();
var features_Geology_3 = format_Geology_3.readFeatures(json_Geology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_3.addFeatures(features_Geology_3);
var lyr_Geology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_3, 
                style: style_Geology_3,
                popuplayertitle: 'Geology',
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_3_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/Geology_3_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_3_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/Geology_3_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/Geology_3_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Geology_3_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/Geology_3_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/Geology_3_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/Geology_3_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/Geology_3_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/Geology_3_10.png" /> Tank/WB/River<br />\
    <img src="styles/legend/Geology_3_11.png" /> <br />' });
var format_CHECKDAM_4 = new ol.format.GeoJSON();
var features_CHECKDAM_4 = format_CHECKDAM_4.readFeatures(json_CHECKDAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHECKDAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKDAM_4.addFeatures(features_CHECKDAM_4);
var lyr_CHECKDAM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKDAM_4, 
                style: style_CHECKDAM_4,
                popuplayertitle: 'CHECK DAM',
                interactive: true,
                title: '<img src="styles/legend/CHECKDAM_4.png" /> CHECK DAM'
            });
var format_STREAM__5 = new ol.format.GeoJSON();
var features_STREAM__5 = format_STREAM__5.readFeatures(json_STREAM__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAM__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM__5.addFeatures(features_STREAM__5);
var lyr_STREAM__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM__5, 
                style: style_STREAM__5,
                popuplayertitle: 'STREAM_',
                interactive: true,
                title: '<img src="styles/legend/STREAM__5.png" /> STREAM_'
            });
var format_Waterbody_6 = new ol.format.GeoJSON();
var features_Waterbody_6 = format_Waterbody_6.readFeatures(json_Waterbody_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_6.addFeatures(features_Waterbody_6);
var lyr_Waterbody_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_6, 
                style: style_Waterbody_6,
                popuplayertitle: 'Waterbody',
                interactive: true,
                title: '<img src="styles/legend/Waterbody_6.png" /> Waterbody'
            });
var format_Road_7 = new ol.format.GeoJSON();
var features_Road_7 = format_Road_7.readFeatures(json_Road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_7.addFeatures(features_Road_7);
var lyr_Road_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_7, 
                style: style_Road_7,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_7.png" /> Road'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GEOMORPHOLOGY_1.setVisible(true);lyr_Bharathapuzha_2.setVisible(true);lyr_Geology_3.setVisible(true);lyr_CHECKDAM_4.setVisible(true);lyr_STREAM__5.setVisible(true);lyr_Waterbody_6.setVisible(true);lyr_Road_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GEOMORPHOLOGY_1,lyr_Bharathapuzha_2,lyr_Geology_3,lyr_CHECKDAM_4,lyr_STREAM__5,lyr_Waterbody_6,lyr_Road_7];
lyr_GEOMORPHOLOGY_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Bharathapuzha_2.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Geology_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_CHECKDAM_4.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_STREAM__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Waterbody_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Road_7.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_GEOMORPHOLOGY_1.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Bharathapuzha_2.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Geology_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_CHECKDAM_4.set('fieldImages', {'Name': '', 'name1': '', 'Photo': '', });
lyr_STREAM__5.set('fieldImages', {'OBJECTID': '', 'ORDER1': '', 'Shape_Leng': '', 'LENGTH': '', });
lyr_Waterbody_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Road_7.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_GEOMORPHOLOGY_1.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Bharathapuzha_2.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Geology_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_CHECKDAM_4.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_STREAM__5.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Waterbody_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Road_7.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_Road_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});