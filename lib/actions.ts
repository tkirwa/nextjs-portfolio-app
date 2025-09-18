"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- Skill Actions ---

export async function addSkill(formData: FormData) {
    const name = formData.get("name") as string;
    if (!name) throw new Error("Skill name is required.");
    try {
        await prisma.skill.create({ data: { name } });
        revalidatePath("/admin");
        revalidatePath("/"); // This revalidates the homepage.
    } catch (error) {
        throw new Error("Failed to add skill.");
    }
}

export async function editSkill(id: number, newName: string) {
    if (!newName) throw new Error("New skill name is required.");
    try {
        await prisma.skill.update({ where: { id: id }, data: { name: newName } });
        revalidatePath("/admin");
        revalidatePath("/"); // This revalidates the homepage.
    } catch (error) {
        throw new Error("Failed to edit skill.");
    }
}

export async function deleteSkill(id: number) {
    try {
        await prisma.skill.delete({ where: { id: id } });
        revalidatePath("/admin");
        revalidatePath("/"); // This revalidates the homepage.
    } catch (error) {
        throw new Error("Failed to delete skill.");
    }
}

// --- Project Actions ---

export async function addProject(formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    if (!title || !slug || !description) throw new Error("Missing project data.");
    try {
        await prisma.project.create({ data: { title, slug, description } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to add project.");
    }
}

export async function editProject(id: number, formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    if (!title || !slug || !description) throw new Error("Missing project data.");
    try {
        await prisma.project.update({ where: { id }, data: { title, slug, description } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to edit project.");
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({ where: { id } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to delete project.");
    }
}

// --- Tag Actions ---

export async function addTag(formData: FormData) {
    const name = formData.get("name") as string;
    if (!name) throw new Error("Tag name is required.");
    try {
        await prisma.tag.create({ data: { name } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to add tag.");
    }
}

export async function editTag(id: number, newName: string) {
    if (!newName) throw new Error("New tag name is required.");
    try {
        await prisma.tag.update({ where: { id }, data: { name: newName } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to edit tag.");
    }
}

export async function deleteTag(id: number) {
    try {
        await prisma.tag.delete({ where: { id } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to delete tag.");
    }
}

// --- User Actions ---

export async function addUser(formData: FormData) {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const password = "default_password"; // Simplified for this example
    if (!email || !password) throw new Error("Missing user data.");
    try {
        await prisma.user.create({ data: { email, name, password, phone } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to add user.");
    }
}

export async function editUser(id: number, formData: FormData) {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    if (!email) throw new Error("Missing user data.");
    try {
        await prisma.user.update({ where: { id }, data: { email, name, phone } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to edit user.");
    }
}

export async function deleteUser(id: number) {
    try {
        await prisma.user.delete({ where: { id } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to delete user.");
    }
}

// --- Contact Actions (read-only/delete) ---

export async function deleteContact(id: number) {
    try {
        await prisma.contact.delete({ where: { id } });
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Failed to delete contact.");
    }
}
