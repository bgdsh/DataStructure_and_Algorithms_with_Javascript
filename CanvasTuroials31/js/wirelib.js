/**
 * Created by bgd on 16/5/20.
 */
var wirelib = (function() {

    var canvas, context, width, height, lines = [], cx, cy, cz, fl = 250, interval, loopCallback, running;

    function initWithCanvas(aCanvas) {
        canvas = aCanvas;
        if(canvas !==  undefined) {
            width = canvas.width;
            height = canvas.height;
            cx = width / 2;
            cy = height / 2;
            cz = fl * 2;
            context = canvas.getContext("2d");
        }
    }

    function project(p3d) {
        var p2d = {}, scale = fl / (fl + p3d.z + cz);
        p2d.x = cx + p3d.x * scale;
        p2d.y = cy + p3d.y * scale;
        return p2d;
    }

    function addLine() {
        var i, numPoints, points, line;
        points = (typeof arguments[0] === "object") ? arguments[0] : arguments;

        numPoints = points.length;
        if(numPoints >= 6) {
            line = {style:this.strokeStyle, width:this.lineWidth, points:[]};
            lines.push(line);
            for(i = 0; i < numPoints; i += 3) {
                line.points.push({x:points[i], y:points[i + 1], z:points[i + 2]});
            }
        }
        else {
            console.error("wirelib.addLine: You need to add at least two 3d points (6 numbers) to make a line.");
        }
        return line;
    }

    function addBox(x, y, z, w, h, d) {
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
    }

    function addRect(x, y, z, w, h) {
        this.addLine(x - w / 2, y - h / 2, z,
            x + w / 2, y - h / 2, z,
            x + w / 2, y + h / 2, z,
            x - w / 2, y + h / 2, z,
            x - w / 2, y - h / 2, z);
    }

    function addCircle(x, y, z, radius, segments) {
        var i, points = [], a;
        for(i = 0; i < segments; i += 1) {
            a = Math.PI * 2 * i / segments;
            points.push(x + Math.cos(a) * radius, y + Math.sin(a) * radius, z);
        }
        points.push(points[0], points[1], points[2]);
        this.addLine(points);
    }

    function draw() {
        var i, j, line, p2d;
        if(this.clearCanvas) {
            context.clearRect(0, 0, width, height);
        }
        for(i = 0; i < lines.length; i += 1) {
            context.beginPath();
            line = lines[i];
            p2d = project(line.points[0]);
            context.moveTo(p2d.x, p2d.y);
            for(j = 1; j < line.points.length; j += 1) {
                p2d = project(line.points[j]);
                context.lineTo(p2d.x, p2d.y);
            }
            context.lineWidth = line.width;
            context.strokeStyle = line.style;
            context.stroke();
        }
        if(this.showCenter) {
            p2d = project({x:0, y:0, z:0});
            context.strokeStyle = "#ff0000";
            context.lineWidth = 0.5;
            context.beginPath();
            context.arc(p2d.x, p2d.y, 5, 0, Math.PI * 2, false);
            context.stroke();
        }
    }

    function loop(fps, callback) {
        if(!running) {
            var wl = this;
            running = true;
            loopCallback = callback;
            interval = setInterval(function() {
                loopCallback();
                wl.draw();
            }, 1000 / fps);
        }
    }



    function stop() {
        running = false;
        clearInterval(interval);
    }

    function rotateX(radians) {
        var i, j, p, y1, z1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for(i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for(j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                y1 = p.y * cos - p.z * sin;
                z1 = p.z * cos + p.y * sin;
                p.y = y1;
                p.z = z1;
            }
        }
    }

    function rotateY(radians) {
        var i, j, p, x1, z1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for(i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for(j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                z1 = p.z * cos - p.x * sin;
                x1 = p.x * cos + p.z * sin;
                p.x = x1;
                p.z = z1;
            }
        }
    }

    function rotateZ(radians) {
        var i, j, p, x1, y1, line, cos = Math.cos(radians), sin = Math.sin(radians);
        for(i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for(j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                y1 = p.y * cos - p.x * sin;
                x1 = p.x * cos + p.y * sin;
                p.x = x1;
                p.y = y1;
            }
        }
    }

    function translate(x, y, z) {
        var i, j, p, line;
        for(i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for(j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                p.x += x;
                p.y += y;
                p.z += z;
            }
        }
    }

    function jitter(amount) {
        var i, j, line;
        for(i = 0; i < lines.length; i += 1) {
            line = lines[i];
            for(j = 0; j < line.points.length; j += 1) {
                p = line.points[j];
                p.x += Math.random() * amount * 2 - amount;
                p.y += Math.random() * amount * 2 - amount;
                p.z += Math.random() * amount * 2 - amount;
            }
        }
    }

    function setCenter(x, y, z) {
        cx = x === null ? cx : x;
        cy = y === null ? cy : y;
        cz = z === null ? cz : z;
    }

    return {initWithCanvas:initWithCanvas,
        addLine:addLine,
        addBox:addBox,
        addRect:addRect,
        addCircle:addCircle,
        draw:draw,
        rotateX:rotateX,
        rotateY:rotateY,
        rotateZ:rotateZ,
        translate:translate,
        jitter:jitter,
        clearCanvas:true,
        strokeStyle:"#000000",
        lineWidth:1,
        loop:loop,
        stop:stop,
        showCenter:false,
        setCenter:setCenter
    };

}());