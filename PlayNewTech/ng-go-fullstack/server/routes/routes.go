package routes

import (
	"github.com/bgd_sh/NgFullstackByGo/server/api/todo/routes"
	
	"github.com/bgd_sh/NgFullstackByGo/server/common/static"
	
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Pre(middleware.RemoveTrailingSlash())
	
	static.Init(e)
	
	todoroutes.Init(e)
}
