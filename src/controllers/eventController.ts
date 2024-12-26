import { Request, Response } from "express";
import { Event } from "../types/Event";
import { v4 as uuidv4 } from "uuid";

const events: Event[] = [];

export const addEvent = (req: Request, res: Response) => {
    const event: Event = {
        ...req.body,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    events.push(event);
    res.status(201).json(event);
};

export const updateEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Event not found" });
    }
    events[index] = {
        ...events[index],
        ...req.body,
        updatedAt: new Date(),
    };
    res.json(events[index]);
};

export const deleteEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Event not found" });
    }
    events.splice(index, 1);
    res.status(204).send();
};

export const getEventById = (req: Request, res: Response) => {
    const { id } = req.params;
    const event = events.find(event => event.id === id);
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
};

export const listEvents = (req: Request, res: Response) => {
    const { organizer, eventDate, city } = req.query;
    let filteredEvents = events;

    if (organizer) {
        filteredEvents = filteredEvents.filter(event => event.organizer === organizer);
    }

    if (eventDate) {
        filteredEvents = filteredEvents.filter(event => event.eventDate.toISOString().startsWith(eventDate as string));
    }

    if (city) {
        filteredEvents = filteredEvents.filter(event => event.location.city === city);
    }

    res.json(filteredEvents);
};
