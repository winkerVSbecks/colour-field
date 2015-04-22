var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  tolerance: 5
};

var segment, path;
var movePath = false;

module.exports.onMouseDown = function(event) {
  segment = path = null;
  var hitResult = project.hitTest(event.point, hitOptions);

  if (!hitResult) {
    return;
  }

  if (event.modifiers.shift) {
    if (hitResult.type === 'segment') {
      hitResult.segment.remove();
    };
    return;
  }

  if (hitResult) {
    path = hitResult.item;

    if (hitResult.type === 'segment') {

      segment = hitResult.segment;

    } else if (hitResult.type === 'stroke') {

      var location = hitResult.location;
      segment = path.insert(location.index + 1, event.point);
      path.smooth();

    }
  }

  movePath = hitResult.type === 'fill';

  if (movePath) {
    project.activeLayer.addChild(hitResult.item);
  }
};

module.exports.onMouseMove = function(event) {
  project.activeLayer.selected = false;

  if (event.item) {
    event.item.selected = true;
  }
};

module.exports.onMouseDrag = function(event) {
  if (segment) {
    segment.point = segment.point.add(event.delta);
    path.smooth();
  } else if (path) {
    path.position = path.position.add(event.delta);
  }
};

