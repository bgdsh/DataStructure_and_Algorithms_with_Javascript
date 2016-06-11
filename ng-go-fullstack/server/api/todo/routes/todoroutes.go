package todoroutes

import (
	"github.com/bgd_sh/NgFullstackByGo/server/api/todo/controller"
	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	e.Get("/api/todos", todocontroller.GetAll)
	e.Post("/api/todos", todocontroller.NewTodo)
	e.Delete("/api/todos/:id", todocontroller.RemoveTodo)
}
