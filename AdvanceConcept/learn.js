let object = [
    {
        Level: "BUSINESS",
        SegmentCode: "RIL",
        SectorCode: "RILTRD",
        EntityID: 247,
        CircleID: 19923
    },
    {
        Level: "UNIT",
        SegmentCode: "RIL",
        SectorCode: null,
        EntityID: 200,
        CircleID: null
    },
    {
        Level: "UNIT",
        SegmentCode: "RIL",
        SectorCode: "RILTRD",
        EntityID: 217,
        CircleID: 19213
    },
    {
        Level: "BUSINESS",
        SegmentCode: "RIL",
        SectorCode: null,
        EntityID: 199,
        CircleID: null
    }
]


let segmentLst = [... new Set(object.map(o => o.SegmentCode).filter(x => x != null))]
let sectorLst = [... new Set(object.map(o => o.SectorCode).filter(x => x != null))]
let entityLst = [... new Set(object.map(o => o.EntityID).filter(x => x != null))]
let circleLst = [... new Set(object.map(o => o.CircleID).filter(x => x != null))]
let spaLevel = [... new Set(object.map(o => o.Level).filter(x => x != null))]

console.log(segmentLst)
console.log(sectorLst)
console.log(entityLst)
console.log(circleLst)    
console.log(spaLevel)    

if(spaLevel === 'BUSINESS'){
    if(segmentLst.length>0 && entityLst.length>0  && sectorLst.length>0 && circleLst.length>0){
        `AND (FIND_IN_SET(SegmentCode,${segmentLst.join(',')}) AND FIND_IN_SET(EntityID,${entityLst.join(',')}) AND  FIND_IN_SET(SectorCode, ${sectorLst.join(',')}) AND FIND_IN_SET(CircleID, ${circleLst.join(',')}))`;
    }
    else if(segmentLst.length>0 && entityLst.length>0  && sectorLst.length>0){
        `OR (FIND_IN_SET(SegmentCode,${segmentLst.join(',')}) AND FIND_IN_SET(EntityID,${entityLst.join(',')}) AND FIND_IN_SET(SectorCode, ${sectorLst.join(',')})) `;
    }
    else if(segmentLst.length>0 && entityLst.length>0){
        `OR (FIND_IN_SET(SegmentCode,${segmentLst.join(',')}) AND FIND_IN_SET(EntityID,${entityLst.join(',')}))`;
    }
}