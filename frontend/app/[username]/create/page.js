"use client"
import React from 'react'
import "../../globals.css"
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const page = () => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className="w-[80vw] h-screen overflow-x-auto ml-[20vw] px-[0vh] py-[20vh] absolute border-l-[grey] border-l border-solid">
      <h3>create post</h3>
      <form>
        <Card className="mt-6 w-96">
          <Textarea label="What's in your mind ??" />
          <CardBody>
            <div className="w-72">
              <Input type='file' label="Choose image" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
          <Button onClick={handleOpen} variant="gradient">
        submit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure you want to post this ??</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
          </CardFooter>
        </Card>

      </form>

    </div>
  )
}

export default page