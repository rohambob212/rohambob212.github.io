"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx

from aparater.apart import *

docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    number = 1

    vid = vu("rohambob", number)
    name = vid[0]
    thumbnail = vid[1]
    url = vid[2]
    views = str(vid[3])

    def refresh(self):
        self.vid = vu("rohambob", self.number)
        self.name = self.vid[0]
        self.thumbnail = self.vid[1]
        self.url = self.vid[2]
        self.views = str(self.vid[3])

    def increase_number(self):
        self.number += 1
        return self.refresh()
    def decrease_number(self):
        self.number -= 1
        return self.refresh()



rx.page(on_load=State.refresh)


def index() -> rx.Component:
    return rx.center(
        #rx.theme_panel(),
        rx.vstack(
            rx.heading("My Aparat Videos",size="9",color_scheme="crimson",weight="bold", margin_bottom="4px"),
            rx.card(
                rx.inset(
                    rx.image(src=State.thumbnail, height="auto"),
                    side="top",
                    pb="current"
                ),
                rx.link(rx.text(State.name,align="center",size="5"), href=State.url),
            ),
            rx.hstack(
                rx.button(rx.text("decrease"), color_scheme="tomato",on_click=State.decrease_number),
                rx.text(State.number),
                rx.button(rx.text("increase",on_click=State.increase_number),color_scheme="grass"),
            align_items="center"
            ),
            rx.hstack(rx.text("views: " + State.views,size="4")),
            align_items="center"
        )
        )


app = rx.App()
app.add_page(index,title="my aparat videos")
