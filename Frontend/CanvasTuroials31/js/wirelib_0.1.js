function Wirelib(canvas) {
    var context, width, height, lines = [], cx, cy, cz, fl = 250, interval, running, strokeStyle = "#000000", lineWidth = 1, showCenter = false, clearCanvas = true;

    this.project = function (p3d) {
        var p2d = {}, scale = fl / (fl + p3d.z + cz);
        p2d.x = cx + p3d.x * scale;
        p2d.y = cy + p3d.y * scale;
        return p2d;
    };

    this.addLine = function () {
        var i, numPoints, points, line;
        points = (typeof arguments[0] === "object") ? arguments[0] : arguments;

        numPoints = points.length;
        if (numPoints >= 6) {
            line = {style: strokeStyle, width: lineWidth, points: []};
            lines.push(line);
            for (i = 0; i < numPoints; i += 3) {
                line.points.push({x: points[i], y: points[i + 1], z: points[i + 2]});
            }
        } else {
            console.error("wirelib.addLine: You need to add at least two 3d points (6 numbers) to make a line.");
        }
        return line;
    };

    this.addBox = function (x, y, z, w, h, d) {
        this.addLine(x - w / 2, y - h / 2, z - d / 2,
            x + w / 2, y - h / 2, z - d / 2,
            x + w / 2, y + h / 2, z - d / 2,
            x - w / 2, y + h / 2, z - d / 2,
            x - w / 2, y - h / 2, z - d / 2);
        this.addLine(x - w / 2, y - h / 2, z + d / 2,
            x + w / 2, y - h / 2, z + d / 2,
            x + w / 2, y + h / 2, z + d / 2,
            x - w / 2, y + h / 2, z + d / 2,
            x - w / 2, y - h / 2, z + d / 2);
        this.addLine(x - w / 2, y - h / 2, z - d / 2,
            x - w / 2, y - h / 2, z + d / 2);
        this.addLine(x + w / 2, y - h / 2, z - d / 2,
            x + w / 2, y - h / 2, z + d / 2);
        this.addLine(x + w / 2, y + h / 2, z - d / 2,
            x + w / 2, y + h / 2, z + d / 2);
        this.addLine(x - w / 2, y + h / 2, z - d / 2,
            x - w / 2, y + h / 2, z + d / 2);
    };

    this.addRect = function (x, y, z, w, h) {
        this.addLine(x - w / 2, y - h / 2, z,
            x + w / 2, y - h / 2, z,
            x + w / 2, y + h / 2, z,
            x - w / 2, y + h / 2, z,
            x - w / 2, y - h / 2, z);
    };

    this.addCircle = function (x, y, z, radius, segments) {
        var i, points = [], a;
        for (i = 0; i < segments; i += 1) {
            a = Math.PI * 2 * i / segments;
            points.push(x + Math.cos(a) * radius, y + Math.sin(a) * radius, z);
        }
        points.push(points[0], points[1], points[2]);
        this.addLine(points);
    };

    this.draw = function () {
        var i, j, line, p2d;
        if (clearCanvas) {
            context.clearRect(0, 0, width, height);
        }
        for (i = 0; i < lines.length; i += 1) {
            context.beginPath();
            line = lines[i];
            p2d = this.project(line.points[0]);
            context.moveTo(p2d.x, p2d.y);
            for (j = 1; j < line.points.length; j += 1) {
                p2d = this.project(line.points[j]);
                context.lineTo(p2d.x, p2d.y);
            }
            context.lineWidth = line.width;
            context.strokeStyle = line.style;
            context.stroke();
        }
        if (showCenter) {
            p2d = this.project({x: 0, y: 0, z: 0});
            context.strokeStyle = "#ff0000";
            context.lineWidth = 0.5;
            context.beginPath();
            context.arc(p2d.x, p2d.y, 5, 0, Math.PI * 2, false);
            context.stroke();
        }
    };

    this.loop = function (fps, callback) {
        if (!running) {
            var wl = this;
            running = true;
            interval = setInterval(function () {
                callback();
                wl.draw();
            }, 1000 / fps);
        }
    };

    this.stop = function () {
        running = false;
        clearInterval(interval);
    };

    this.rotateX = function (radians) {
        var i, j, p, y1, z1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for (j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                y1 = p.y * cos - p.z * sin;
                z1 = p.z * cos + p.y * sin;
                p.y = y1;
                p.z = z1;
            }
        }
    };

    this.rotateY = function (radians) {
        var i, j, p, x1, z1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for (j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                z1 = p.z * cos - p.x * sin;
                x1 = p.x * cos + p.z * sin;
                p.x = x1;
                p.z = z1;
            }
        }
    };

    this.rotateZ = function (radians) {
        var i, j, p, x1, y1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for (j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                y1 = p.y * cos - p.x * sin;
                x1 = p.x * cos + p.y * sin;
                p.x = x1;
                p.y = y1;
            }
        }
    };

    this.translate = function (x, y, z) {
        var i, j, p, line;
        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for (j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                p.x += x;
                p.y += y;
                p.z += z;
            }
        }
    };

    this.jitter = function (amount) {
        var i, j, line, p;
        for (i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for (j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                p.x += Math.random() * amount * 2 - amount;
                p.y += Math.random() * amount * 2 - amount;
                p.z += Math.random() * amount * 2 - amount;
            }
        }
    };

    this.setCenter = function (x, y, z) {
        cx = x === null ? cx : x;
        cy = y === null ? cy : y;
        cz = z === null ? cz : z;
    };

    this.setStrokeStyle = function (s) {
        strokeStyle = s;
    };

    this.getStrokeStyle = function () {
        return strokeStyle;
    };

    this.setLineWidth = function (w) {
        lineWidth = w;
    };

    this.getLineWidth = function () {
        return lineWidth;
    };

    this.setClearCanvas = function (c) {
        clearCanvas = c;
    };

    this.getClearCanvas = function () {
        return clearCanvas;
    };

    this.setShowCenter = function (sc) {
        showCenter = sc;
    };

    this.getShowCenter = function () {
        return showCenter;
    };

    if (canvas !==  undefined) {
        width = canvas.width;
        height = canvas.height;
        cx = width / 2;
        cy = height / 2;
        cz = fl * 2;
        context = canvas.getContext("2d");
    }
}