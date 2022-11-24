SELECT U.[UserName] AS "Usuario", U.[Email], R.[Name] AS "Rol"
FROM [dbo].[AspNetUsers] U INNER JOIN [dbo].[AspNetUserRoles] UR
ON U.Id = UR.UserId INNER JOIN [dbo].[AspNetRoles] R
ON UR.RoleId = R.Id


SELECT*FROM AspNetUsers

SELECT*FROM AspNetRoles