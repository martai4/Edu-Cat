create table education_choice_entity
(
    ranking        integer,
    id             bigint not null
        primary key,
    category       varchar(255),
    city           varchar(255),
    collage        varchar(255),
    field_of_study varchar(255)
);

alter table education_choice_entity
    owner to postgres;

INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (80, 1, 'TECHNICAL', 'Poznan', 'Poznan University of Technology', 'Computer Science');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (65, 2, 'MEDICAL', 'Poznan', 'UAM', 'Computer Science');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (75, 3, 'SCIENCE', 'Some City', 'Some College', 'Mathematics');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (90, 4, 'HUMANIST', 'Another City', 'Another College', 'Physics');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (70, 5, 'SOCIAL', 'XYZ City', 'XYZ University', 'Engineering');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (85, 6, 'TECHNICAL', 'ABC City', 'ABC College', 'Biology');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (78, 7, 'MEDICAL', 'DEF City', 'DEF Institute', 'Chemistry');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (88, 8, 'SCIENCE', 'GHI City', 'GHI University', 'Psychology');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (92, 9, 'HUMANIST', 'JKL City', 'JKL College', 'Economics');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (68, 10, 'ENVIRONMENTAL', 'MNO City', 'MNO Institute', 'History');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (79, 11, 'TECHNICAL', 'City X', 'University X', 'Sociology');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (77, 12, 'MEDICAL', 'City Y', 'College Y', 'Political Science');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (86, 13, 'SCIENCE', 'City Z', 'University Z', 'English Literature');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (91, 14, 'HUMANIST', 'City A', 'City College', 'Geology');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (73, 15, 'SOCIAL', 'City B', 'Town University', 'Art History');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (82, 16, 'TECHNICAL', 'City C', 'County College', 'Environmental Science');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (75, 17, 'MEDICAL', 'City D', 'State Institute', 'Music');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (87, 18, 'SCIENCE', 'City E', 'National University', 'Drama');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (89, 19, 'HUMANIST', 'City F', 'Private College', 'Film Studies');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (71, 20, 'ENVIRONMENTAL', 'City G', 'Public Institute', 'Philosophy');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (83, 21, 'TECHNICAL', 'City H', 'Technical College', 'Astronomy');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (76, 22, 'MEDICAL', 'City I', 'Arts University', 'Anthropology');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (84, 23, 'SCIENCE', 'City J', 'Science College', 'Linguistics');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (93, 24, 'HUMANIST', 'City K', 'Business School', 'Marketing');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (67, 25, 'SOCIAL', 'City L', 'Law University', 'Criminal Justice');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (81, 26, 'TECHNICAL', 'City M', 'Medical College', 'Nursing');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (74, 27, 'MEDICAL', 'City N', 'Design Institute', 'Graphic Design');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (90, 28, 'SCIENCE', 'City O', 'Fine Arts College', 'Dance');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (94, 29, 'HUMANIST', 'City P', 'Engineering University', 'Civil Engineering');
INSERT INTO public.education_choice_entity (ranking, id, category, city, collage, field_of_study) VALUES (70, 30, 'ENVIRONMENTAL', 'Last City', 'Last College', 'History');
